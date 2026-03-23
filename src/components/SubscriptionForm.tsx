import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export function SubscriptionForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setStatus("loading");
    
    try {
      // Simulated API call for backend integration
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Subscribing email:", values.email);
      
      setStatus("success");
      toast({
        title: "Subscription Successful!",
        description: "Welcome to the Comely Arts community. Check your inbox soon!",
      });
      form.reset();
    } catch (error) {
      setStatus("idle");
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 p-8 text-center animate-in fade-in zoom-in duration-500 bg-secondary/20 rounded-2xl border border-secondary/30">
        <div className="rounded-full bg-secondary p-3 shadow-sm">
          <CheckCircle2 className="h-8 w-8 text-secondary-foreground" />
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-foreground">You're on the list!</h3>
          <p className="text-muted-foreground max-w-[280px] mx-auto">
            We'll keep you posted on upcoming workshops and exclusive art events.
          </p>
        </div>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => setStatus("idle")}
          className="text-primary hover:text-primary/80 hover:bg-transparent underline underline-offset-4"
        >
          Subscribe another email
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      placeholder="your@email.com"
                      className="bg-card border-border focus-visible:ring-primary h-12 rounded-xl transition-all hover:border-primary/50"
                      disabled={status === "loading"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-destructive font-medium" />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              disabled={status === "loading"}
              className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-all shadow-md active:scale-95 disabled:opacity-70"
            >
              {status === "loading" ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <span className="flex items-center gap-2">
                  Join Community
                  <Send className="h-4 w-4" />
                </span>
              )}
            </Button>
          </div>
          <div className="flex flex-col items-center space-y-2 opacity-80">
            <p className="text-xs text-center text-muted-foreground italic">
              Join 500+ art lovers. No spam, just pure creativity delivered to your inbox.
            </p>
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-border" />
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">© 2026 Comely Arts</span>
              <span className="h-px w-8 bg-border" />
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
