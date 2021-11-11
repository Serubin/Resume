type PanelProps = {
  children: React.ReactNode;
}

export default function SidePanel({ children }: PanelProps) {
  return (
    <div className="section-3 fill col-md-4">
      { children }
    </div>
  );
}
