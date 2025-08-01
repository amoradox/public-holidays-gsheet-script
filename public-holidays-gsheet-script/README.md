# 🇨🇱 🇵🇪 🇲🇽 🇨🇴 🇦🇷 Holiday Loader for Google Sheets

This Google Apps Script fetches national public holidays for selected countries using ISO country Code, from the [Nager.Date](https://date.nager.at/).
In this instance it's defined for Chile, Peru, Mexico, Colombia, and Argentina, fetching data from the API and loading it into a Google Sheets document.

## 📌 Features

- Fetches public holidays from the `https://date.nager.at/api/v3/PublicHolidays` endpoint.
- Populates a Google Sheet with: country code, holiday date, local name, international name, whether it's a global holiday, type of holiday, and a default `freeTime` value per week (set to `0.2`).
- Works for the current year.

## 🧩 Requirements

This script must be executed in the **Google Apps Script** environment, accessible through a Google Spreadsheet.

## 🚀 How to Use

1. Open a new or existing Google Sheet.
2. Go to `Extensions > Apps Script`.
3. Paste the content of `script.js` into the editor.
4. Save and run the `loadHolidaysToSheet` function.
5. Grant the necessary permissions the first time you execute the script.

## 🌍 Supported Countries

- **CL** – Chile  
- **PE** – Peru  
- **MX** – Mexico  
- **CO** – Colombia  
- **AR** – Argentina
- You can add or change the codes ISO 3166-1 alpha-2 in loadHolidaysToSheet function.

## 🗃️ Sheet Output Structure

Each row written to the sheet contains the following columns:

| countryCode | holidayDate | localName | comercialName | globalHoliday | Type   | freeTime |
|-------------|-------------|-----------|----------------|----------------|--------|----------|

## 📝 Example API Response

```json
{
  "date": "2025-01-01",
  "localName": "Año Nuevo",
  "name": "New Year's Day",
  "countryCode": "CL",
  "fixed": false,
  "global": true,
  "counties": null,
  "launchYear": null,
  "types": [
    "Public"
  ]
}