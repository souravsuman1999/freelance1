import Navigation from "@/components/navigation"

export default function SummerCampsPage() {
  return (
    <>
      <Navigation />
      <main
        style={{
          paddingTop: "100px",
          minHeight: "100vh",
          background: "#0a0a0f",
        }}
      >
        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "0 16px",
          }}
        >
          <h1
            style={{
              color: "#fff",
              fontSize: "48px",
              marginBottom: "24px",
            }}
          >
            Summer Camps
          </h1>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: "18px",
              maxWidth: "720px",
              lineHeight: 1.6,
            }}
          >
            Discover immersive summer experiences that help students build skills, explore interests,
            and connect with peers. Content coming soon.
          </p>
        </div>
      </main>
    </>
  )
}

