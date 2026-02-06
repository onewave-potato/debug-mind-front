import { Button } from '@/components/ui/button';
import { useStore } from '@/store/useStore';
import { toast } from 'sonner';

export default function HomePage() {
  const { count, increase } = useStore();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-3xl font-bold text-primary">Debug Mind Home</h1>
      <div className="flex gap-2">
        <span className="text-xl font-medium">Count: {count}</span>
        <Button onClick={increase}>Increase</Button>
      </div>
      <Button variant="outline" onClick={() => toast.success('Hello!')}>
        Toast Test
      </Button>
    </div>
  );
}
