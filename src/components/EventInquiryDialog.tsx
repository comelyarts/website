import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import { EVENT_INQUIRY_SUBMIT_URL } from '@/lib/index';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  contact: z.string().min(1, 'Contact number is required'),
  email: z.string().email('Please enter a valid email'),
  date: z.string().min(1, 'Date of event is required'),
});

type FormValues = z.infer<typeof formSchema>;

async function submitInquiry(data: FormValues & { eventType: string }): Promise<boolean> {
  if (!EVENT_INQUIRY_SUBMIT_URL?.trim()) return false;
  const res = await fetch(EVENT_INQUIRY_SUBMIT_URL.trim(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.ok;
}

interface EventInquiryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  eventType: string;
}

export function EventInquiryDialog({
  open,
  onOpenChange,
  eventType,
}: EventInquiryDialogProps) {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      contact: '',
      email: '',
      date: '',
    },
  });

  useEffect(() => {
    if (!open) setSuccess(false);
  }, [open]);

  async function onSubmit(values: FormValues) {
    setSubmitting(true);
    const data = { ...values, eventType };
    let sent = false;
    try {
      sent = await submitInquiry(data);
    } catch {
      sent = false;
    }
    if (sent) {
      setSuccess(true);
      toast({
        title: 'Thank you!',
        description: 'Team will contact you shortly.',
      });
      form.reset();
      setTimeout(() => {
        setSuccess(false);
        onOpenChange(false);
      }, 2000);
    } else {
      toast({
        variant: 'destructive',
        title: 'Could not send',
        description: EVENT_INQUIRY_SUBMIT_URL?.trim()
          ? 'Something went wrong. Please try again or reach out via WhatsApp.'
          : 'Form is not configured. Please set EVENT_INQUIRY_SUBMIT_URL (see event-inquiry-email.gs).',
      });
    }
    setSubmitting(false);
  }

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          {success ? (
            <div className="py-8 text-center space-y-2">
              <p className="text-lg font-semibold text-foreground">Thank you!</p>
              <p className="text-muted-foreground">Team will contact you shortly.</p>
            </div>
          ) : (
            <>
          <DialogHeader>
            <DialogTitle>Tell us about your event</DialogTitle>
            <DialogDescription>
              Share your details and we’ll get back to you.{eventType ? ` Inquiry for: ${eventType}.` : ''}
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <Label>Name</Label>
                    <FormControl>
                      <Input
                        placeholder="Your name"
                        className="rounded-xl"
                        disabled={submitting}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                  <FormItem>
                    <Label>Contact number</Label>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="Phone number"
                        className="rounded-xl"
                        disabled={submitting}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <Label>Email</Label>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className="rounded-xl"
                        disabled={submitting}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <Label>Date of event</Label>
                    <FormControl>
                      <Input
                        type="date"
                        className="rounded-xl"
                        disabled={submitting}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={submitting}
                className="w-full rounded-xl bg-primary hover:bg-primary/90 gap-2"
              >
                {submitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : null}
                Request a callback
              </Button>
            </form>
          </Form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
