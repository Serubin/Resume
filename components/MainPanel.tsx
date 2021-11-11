type Props = {
  children: React.ReactNode;
}

export default function MainPanel({ children }: Props) {
  return (
    <div className="section-4 fill col-md-8" style={{height: '976px'}}>
      { children }
    </div>
  );
}
