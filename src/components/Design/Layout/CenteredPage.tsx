export default function CenteredPage({ size = "sm", children } : { size?: "sm" | "lg", children?: any }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
        <div className={`${size === "sm" ? "w-3/5" : "w-4/5"}`}>
          { children }
        </div>
    </div>
  )
}
