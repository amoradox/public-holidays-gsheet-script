
function getHolidays(countryCode, year) {
  const url = `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`;
  const response = UrlFetchApp.fetch(url);
  const data = JSON.parse(response.getContentText());
  return data.map(h => [h.date, h.localName, h.name, h.global, (h.types || []).join(',')]);
}

function loadHolidaysToSheet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const countries = ['PE', 'AR', 'CO', 'MX', 'CL'];
  const year = new Date().getFullYear();

  sheet.clear();
  sheet.appendRow(['countryCode', 'holidayDate', 'localName', 'comercialName', 'globalHoliday', 'Type', 'freeTime']);

  countries.forEach(code => {
    const holidays = getHolidays(code, year);
    holidays.forEach(row => {
      sheet.appendRow([code, ...row,0.2]);
    });
  });
}