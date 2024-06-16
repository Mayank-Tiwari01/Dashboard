/*
 * For a detailed and comprehensive explanation of the code,
 * please refer to './Code_Explanation_And_Breakdown/ followed by the file name.
 */

export const prepareAccountIndustryData = (data) => {
  const groupedData = {};
  const industries = new Set();

  data.forEach(item => {
    industries.add(item.Acct_Industry);
    if (!groupedData[item.Acct_Industry]) {
      groupedData[item.Acct_Industry] = [];
    }
    groupedData[item.Acct_Industry].push({
      closed_fiscal_quarter: item.closed_fiscal_quarter,
      acv: item.acv,
    });
  });

  const allQuarters = Array.from(new Set(data.map(item => item.closed_fiscal_quarter)));
  allQuarters.sort();

  const finalData = allQuarters.map(quarter => {
    const entry = { closed_fiscal_quarter: quarter };
    for (const industry in groupedData) {
      const industryData = groupedData[industry].find(d => d.closed_fiscal_quarter === quarter);
      entry[industry] = industryData ? industryData.acv : 0;
    }
    return entry;
  });

  return { finalData, industries: Array.from(industries) };
};
