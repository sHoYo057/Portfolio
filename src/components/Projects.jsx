export default function Projects(){
  return (
    <section id="projects" className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Selected Projects</h2>
      <div className="grid gap-4 md:grid-cols-3">
        <article className="p-4 bg-white rounded shadow dark:bg-gray-800">
          <h3 className="font-semibold">Customer Churn Prediction</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Telecom churn modeling — feature engineering and XGBoost / Random Forest ensemble (~85% accuracy).</p>
          <a className="text-blue-500 text-sm" href="https://www.kaggle.com/code/zorornoa/churn-analysis" target="_blank" rel="noopener">View on Kaggle →</a>
        </article>
        <article className="p-4 bg-white rounded shadow dark:bg-gray-800">
          <h3 className="font-semibold">Walmart Store Sales Forecasting</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Time-series forecasting with holiday & weather features for improved predictions.</p>
          <a className="text-blue-500 text-sm" href="https://www.kaggle.com/code/zorornoa/walmart-store-sales-forcasting" target="_blank" rel="noopener">View on Kaggle →</a>
        </article>
        <article className="p-4 bg-white rounded shadow dark:bg-gray-800">
          <h3 className="font-semibold">ETL & Dashboards</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">ETL pipelines and dashboards for retail / telecom datasets to accelerate insights delivery.</p>
          <a className="text-blue-500 text-sm" href="https://github.com/sHoYo057" target="_blank" rel="noopener">View more →</a>
        </article>
      </div>
    </section>
  )
}
