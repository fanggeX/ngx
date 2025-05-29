// app/page.tsx (Home)
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          {/* 左侧图片 */}
          <div className="col-lg-7">
            <img
              src="/assets/energy.jpg"
              alt="Logistics & Energy"
              className="img-fluid rounded mb-4 mb-lg-0"
            />
          </div>

          {/* 右侧标语 + 按钮 */}
          <div className="col-lg-5">
            {/* 玻璃卡片 */}
            <div className="card-glass">
              <h2>Optimizing Supply Chains<br/>&amp; Powering Clean Energy</h2>
                <p>
                  At NGX Consulting, we blend deep logistics know-how with renewable energy strategy
                  to drive efficiency, cut costs, and advance your sustainability goals.
                </p>
            </div>

            {/* 渐变按钮 */}
            <Link href="/contact" className="btn-gradient mt-4">
              Start Your Complimentary Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Card */}
      <div className="card-glass mx-auto text-center py-4" style={{ maxWidth: 600 }}>
        <p className="lead mb-0">
          Schedule your complimentary strategy session and unlock both
          operational efficiency and energy innovation!
        </p>
      </div>

      {/* Services */}
      <section id="services" className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5">
          {[
            {
              icon: '🚚',
              title: 'Freight & Unloading Optimization',
              text:
                'Leverage data-driven processes to streamline freight handling, reduce turnaround times, and gain full visibility across your network.',
            },
            {
              icon: '📊',
              title: 'Inventory Analytics & Control',
              text:
                'Implement real-time dashboards and advanced analytics to improve stock accuracy, minimize shrinkage, and accelerate inventory turnover.',
            },
            {
              icon: '🌞',
              title: 'Renewable Energy Strategy',
              text:
                'Develop a bespoke roadmap for solar, wind, or hybrid projects that maximizes ROI and aligns with your sustainability targets.',
            },
          ].map((svc) => (
            <div className="col-md-4" key={svc.title}>
              {/* Neumorphism 卡片 */}
              <div className="feature-card">
                <div className="icon">{svc.icon}</div>
                <h4>{svc.title}</h4>
                <p>{svc.text}</p>
                <Link href="/contact" className="btn-gradient btn-sm mt-3">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
