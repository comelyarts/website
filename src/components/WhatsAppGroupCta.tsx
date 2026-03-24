import { SiWhatsapp } from 'react-icons/si';
import { cn } from '@/lib/utils';
import { COMMUNITY_CONSTANTS } from '@/lib/index';

interface WhatsAppGroupCtaProps {
  className?: string;
  /** Tighter layout for footer column */
  compact?: boolean;
}

export function WhatsAppGroupCta({ className, compact }: WhatsAppGroupCtaProps) {
  return (
    <div className={cn('w-full max-w-md mx-auto text-center', className)}>
      {!compact && (
        <p className="text-sm text-muted-foreground mb-6">
          Join our WhatsApp channel for workshop updates, tips, and early access—chat with fellow creators
          anytime.
        </p>
      )}
      <div className={cn('flex flex-col gap-3', compact && 'gap-2')}>
        <a
          href={COMMUNITY_CONSTANTS.WHATSAPP_CHANNEL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 font-semibold text-white shadow-md transition hover:bg-[#20BD5A] active:scale-[0.98]',
            compact && 'py-3 text-sm'
          )}
        >
          <SiWhatsapp className="h-5 w-5 shrink-0" />
          Join WhatsApp Channel
        </a>
        <a
          href={COMMUNITY_CONSTANTS.WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#25D366] px-6 py-4 font-semibold text-[#25D366] transition hover:bg-[#25D366]/10 active:scale-[0.98]',
            compact && 'py-3 text-sm'
          )}
        >
          <SiWhatsapp className="h-5 w-5 shrink-0" />
          Chat on WhatsApp
        </a>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        {compact
          ? 'Opens WhatsApp to join the channel.'
          : `Part of our ${COMMUNITY_CONSTANTS.MEMBER_COUNT} community. You can leave anytime.`}
      </p>
      <div className="mt-4 flex items-center justify-center gap-2 opacity-80">
        <span className="h-px w-8 bg-border" />
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
          © {COMMUNITY_CONSTANTS.CURRENT_YEAR} Comely Arts
        </span>
        <span className="h-px w-8 bg-border" />
      </div>
    </div>
  );
}
