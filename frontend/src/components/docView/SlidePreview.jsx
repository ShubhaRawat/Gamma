import { cn } from '@/lib/utils';

export function SlidePreview({ number, title, content, isActive, onClick }) {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "p-2 cursor-pointer hover:bg-accent/50 rounded-lg transition-colors",
        isActive && "bg-accent"
      )}
    >
      <div className="aspect-[16/9] bg-background border rounded-lg p-3 mb-1 overflow-hidden">
        <div className="transform scale-[0.2] origin-top-left w-[500%] h-[500%]">
          {content}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">{number}</span>
        <span className="text-xs truncate flex-1">{title}</span>
      </div>
    </div>
  );
}
