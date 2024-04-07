
export default function SearchHedersLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
    <div>
        <h1>Header - Edit/Preivew - Close</h1>
        <hr></hr>
        {children}
    </div>
    )
  }