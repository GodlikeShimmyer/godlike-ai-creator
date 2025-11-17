import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Wand2, Download } from 'lucide-react';
import { toast } from 'sonner';

export default function ThumbnailCreator() {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState('');
  const [title, setTitle] = useState('');

  const templates = [
    { id: 1, name: 'Gaming', color: 'from-purple-500 to-pink-500' },
    { id: 2, name: 'Tech', color: 'from-blue-500 to-cyan-500' },
    { id: 3, name: 'Vlog', color: 'from-orange-500 to-red-500' },
    { id: 4, name: 'Tutorial', color: 'from-green-500 to-teal-500' },
  ];

  const handleGenerate = () => {
    if (!title || !prompt) {
      toast.error('Please provide a title and prompt');
      return;
    }
    toast.success('Thumbnail generation started! This will be processed by the backend.');
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate('/dashboard')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Thumbnail Creator
          </h1>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle>Design Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Thumbnail Title</Label>
                <Input
                  placeholder="Enter your thumbnail title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label>Templates</Label>
                <div className="grid grid-cols-2 gap-3">
                  {templates.map((template) => (
                    <button
                      key={template.id}
                      className={`p-4 rounded-lg bg-gradient-to-br ${template.color} text-white font-semibold hover:scale-105 transition-transform`}
                    >
                      {template.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>AI Prompt</Label>
                <Textarea
                  placeholder="Describe your thumbnail style (e.g., 'bold text, vibrant colors, eye-catching design')"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={4}
                  className="bg-background/50"
                />
              </div>

              <Button onClick={handleGenerate} className="w-full bg-gradient-primary">
                <Wand2 className="w-4 h-4 mr-2" />
                Generate Thumbnail
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-background/50 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Thumbnail preview will appear here</p>
              </div>
              <Button className="w-full mt-4" variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download Thumbnail
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
