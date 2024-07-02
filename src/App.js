import React from 'react';
import ACVRangeChart from './Components/ACVRangeChart';
import CustomerTypeChart from './Components/CustomerTypeChart';
import TeamChart from './Components/TeamChart';
import CustomerTypeDoughnutChart from './Components/CustomerTypeDoughnutChart';
import AccountIndustryAreaChart from './Components/AccountIndustryAreaChart';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h1 className={styles.mainTitle}>Dashboard</h1>
      </header>
      
      <main>
        <section className={styles.chartContainer}>
          <h2 className={styles.sectionTitle}>ACV Range</h2>
          <ACVRangeChart />
        </section>

        <div className={styles.twoColumnLayout}>
          <div className={styles.column}>
            <section className={styles.chartContainer}>
              <h2 className={styles.sectionTitle}>Customer Type (Bar Chart)</h2>
              <CustomerTypeChart />
            </section>
          </div>
          <div className={styles.column}>
            <section className={styles.chartContainer}>
              <h2 className={styles.sectionTitle}>Customer Type (Doughnut Chart)</h2>
              <CustomerTypeDoughnutChart />
            </section>
          </div>
        </div>

        <section className={styles.chartContainer}>
          <h2 className={styles.sectionTitle}>Team Performance</h2>
          <TeamChart />
        </section>

        <section className={styles.chartContainer}>
          <h2 className={styles.sectionTitle}>Account Industry (Area Chart)</h2>
          <AccountIndustryAreaChart />
        </section>
      </main>
    </div>
  );
};

export default App;