// src/DataTable.js
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = [
    { engine: 'Gecko', browser: 'Mozilla 1.0', platform: 'Win 95+ / OSX.1+', version: '1', grade: 'A' },
    { engine: 'Gecko', browser: 'Mozilla 1.1', platform: 'Win 95+ / OSX.1+', version: '1.1', grade: 'A' },
    { engine: 'Gecko', browser: 'Mozilla 1.2', platform: 'Win 95+ / OSX.1+', version: '1.2', grade: 'A' },
    { engine: 'Gecko', browser: 'Mozilla 1.3', platform: 'Win 95+ / OSX.1+', version: '1.3', grade: 'A' },
    { engine: 'Gecko', browser: 'Mozilla 1.4', platform: 'Win 95+ / OSX.1+', version: '1.4', grade: 'A' },
    { engine: 'Gecko', browser: 'Mozilla 1.5', platform: 'Win 95+ / OSX.1+', version: '1.5', grade: 'A' },
    { engine: 'Gecko', browser: 'Mozilla 1.6', platform: 'Win 95+ / OSX.1+', version: '1.6', grade: 'A' },
    { engine: 'Gecko', browser: 'Firefox 1.0', platform: 'Win 98+ / OSX.2+', version: '1.7', grade: 'A' },
    { engine: 'Gecko', browser: 'Netscape 7.2', platform: 'Win 95+ / Mac OS 8.6-9.2', version: '1.7', grade: 'A' },
    { engine: 'Gecko', browser: 'Netscape Browser 8', platform: 'Win 98SE+', version: '1.7', grade: 'A' },
];

const OperatorsTab = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const entriesPerPage = 10;

    const filteredData = data.filter(item =>
        item.browser.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);
    const totalEntries = filteredData.length;

    const handleNextPage = () => {
        if (currentPage < Math.ceil(totalEntries / entriesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Download as PDF
    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.text("Data Table", 14, 16);
        const headers = [["Rendering Engine", "Browser", "Platform(s)", "Engine Version", "CSS Grade"]];
        const dataForPDF = currentEntries.map(entry => [
            entry.engine,
            entry.browser,
            entry.platform,
            entry.version,
            entry.grade,
        ]);
        doc.autoTable({ head: headers, body: dataForPDF });
        doc.save('data-table.pdf');
    };

    // Download as CSV
    const downloadCSV = () => {
        const csvRows = [
            ['Rendering Engine', 'Browser', 'Platform(s)', 'Engine Version', 'CSS Grade'],
            ...currentEntries.map(entry => [
                entry.engine,
                entry.browser,
                entry.platform,
                entry.version,
                entry.grade,
            ])
        ];

        const csvString = csvRows.map(row => row.join(',')).join('\n');
        const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.setAttribute('download', 'data-table.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Download as Excel
    const downloadExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(currentEntries);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
        XLSX.writeFile(workbook, 'data-table.xlsx');
    };

    // Print the table
    const printTable = () => {
        const printWindow = window.open('', '', 'width=800,height=600');
        printWindow.document.write('<html><head><title>Print</title>');
        printWindow.document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">');
        printWindow.document.write('</head><body>');
        printWindow.document.write('<h1>Data Table</h1>');
        printWindow.document.write('<table class="min-w-full bg-white border border-gray-300">');
        printWindow.document.write('<thead><tr class="bg-gray-200 text-gray-700"><th class="py-2 px-4 border">Rendering Engine</th><th class="py-2 px-4 border">Browser</th><th class="py-2 px-4 border">Platform(s)</th><th class="py-2 px-4 border">Engine Version</th><th class="py-2 px-4 border">CSS Grade</th></tr></thead><tbody>');
        currentEntries.forEach(entry => {
            printWindow.document.write(`<tr class="hover:bg-gray-100"><td class="py-2 px-4 border">${entry.engine}</td><td class="py-2 px-4 border">${entry.browser}</td><td class="py-2 px-4 border">${entry.platform}</td><td class="py-2 px-4 border">${entry.version}</td><td class="py-2 px-4 border">${entry.grade}</td></tr>`);
        });
        printWindow.document.write('</tbody></table></body></html>');
        printWindow.document.close();
        printWindow.print();
    };

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-2xl font-bold mb-4">DataTable</h1>
            <input
                type="text"
                placeholder="Search..."
                className="p-2 border rounded w-full mb-4"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="overflow-x-auto mb-4">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="py-2 px-4 border">Rendering Engine</th>
                            <th className="py-2 px-4 border">Browser</th>
                            <th className="py-2 px-4 border">Platform(s)</th>
                            <th className="py-2 px-4 border">Engine Version</th>
                            <th className="py-2 px-4 border">CSS Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentEntries.map((entry, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border">{entry.engine}</td>
                                <td className="py-2 px-4 border">{entry.browser}</td>
                                <td className="py-2 px-4 border">{entry.platform}</td>
                                <td className="py-2 px-4 border">{entry.version}</td>
                                <td className="py-2 px-4 border">{entry.grade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-700">
                    Showing {indexOfFirstEntry + 1} to {indexOfLastEntry > totalEntries ? totalEntries : indexOfLastEntry} of {totalEntries} entries (filtered from {data.length} total entries)
                </span>
                <div>
                    <button
                        className="px-4 py-2 border rounded-l bg-gray-200"
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <button
                        className="px-4 py-2 border rounded-r bg-gray-200"
                        onClick={handleNextPage}
                        disabled={currentPage >= Math.ceil(totalEntries / entriesPerPage)}
                    >
                        Next
                    </button>
                </div>
            </div>

            <div className="flex space-x-2 mt-4">
                <button onClick={downloadPDF} className="px-4 py-2 bg-blue-500 text-white rounded">Download PDF</button>
                <button onClick={downloadCSV} className="px-4 py-2 bg-green-500 text-white rounded">Download CSV</button>
                <button onClick={downloadExcel} className="px-4 py-2 bg-yellow-500 text-white rounded">Download Excel</button>
                <button onClick={printTable} className="px-4 py-2 bg-gray-500 text-white rounded">Print</button>
            </div>
        </div>
    );
};

export default OperatorsTab;
