import { Component, ElementRef, ViewChild } from '@angular/core';

declare var require: any;

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('pdfTable')
  pdfTable!: ElementRef;

  public downloadAsPDF() {
    const documentDefinition = {
      header: {
        columns: [
          {
            text: `Return Order Confirmation - RC03103345`,
            alignment: 'left',
            fontSize: 16,
            margin: [0, 15] 
          }
        ]
      },
      footer: function (currentPage, pageCount) {
          return {
            columns: [
              {
                fontSize: 9,
                text: [
                  {
                    text: `Page ${currentPage.toString()} of ${pageCount}`,
                  }
                ],
                alignment: 'right',
                margin: [ 0, 0, 25, 0 ]
              }
            ]
          }
        },
      content: [
        {
          text: 'Your return was placed on January 8, 2019 at 1:58 PM.',
          fontSize: 9
        },
        {
          text: [{ text: 'Original Order #:', bold: true }, '3202294242   ',
          { text: 'Account:', bold: true }, '1011014397 - Virginia Beach   ',
          { text: 'Contract:', bold: true }, '1234567890   ',
          { text: 'Terms:', bold: true }, '1.5-15NET30   ',
          { text: 'PO Number :', bold: true }, '1234567890  ',
          { text: 'FedEx Tracking #:', bold: true }, '4255 6313 3589   ',
          { text: 'Currency:', bold: true }, 'USD ($)'],
          fontSize: 9
        },
        { text: '\n' },
        {
          table: {
            widths: ['*', 'auto'],
            body: [
              [{ text: 'Return Subtotal' }, { text: '-96,025.00', noWrap: true,margin: 2  },],
              [{ text: 'Tax' }, { text: '-5.00', noWrap: true, margin: 1  }],
              [{ text: 'Restock Fee' }, { text: '1,000.00', noWrap: true, margin: 1  }],
              [{ text: 'Order Total' }, { text: '-107,035.00', noWrap: true, margin: 1  }],
            ],
          },
          layout: {
            hLineColor: function (i, node) {
              return (i === 0 || i === node.table.body.length) ? 'gray' : 'white';
            },
            vLineColor: function (i, node) {
              return (i === 0 || i === node.table.widths.length) ? 'gray' : 'white';
            }
          },
          fontSize: 10
        },
        { text: '\n\n' },
        {
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: ['auto', 'auto', '*', 'auto', 'auto', 'auto'],
            body: [
              [{
                text: '#',
                fillColor: '#000000',
                color: 'white',
                fontSize: 9,
                border: [false, false, true, false],
                borderColor: ['', '', 'white', '']
              },
              {
                text: 'Item Number',
                fillColor: '#000000',
                color: 'white',
                fontSize: 9,
                border: [false, false, true, false],
                borderColor: ['', '', 'white', '']
              },
              {
                text: 'Item Name / Technical Name',
                fillColor: '#000000',
                color: 'white',
                fontSize: 9,
                border: [false, false, true, false],
                borderColor: ['', '', 'white', '']
              },
              {
                text: 'Price',
                fillColor: '#000000',
                color: 'white',
                fontSize: 9,
                border: [false, false, true, false],
                borderColor: ['', '', 'white', '']
              },
              {
                text: 'Qty',
                fillColor: '#000000',
                color: 'white',
                fontSize: 9,
                border: [false, false, true, false],
                borderColor: ['', '', 'white', '']
              },
              {
                text: 'Total',
                fillColor: '#000000',
                color: 'white',
                fontSize: 9
              },
              ],
              ['1',
                'STDESS0635AA',
                'RDU4160D 16CH UHF (Brus) Order 3202294242 line 4',
                '12,000.00',
                '1000',
                '-106,000.00'
              ],
              [
                {
                  text: 'serial number', colSpan: 6, fillColor: 'white', decoration: 'underline', border: [true, false, true, false]
                }
              ],
              [{
                text: 'AA88177718882990  AA88177718882990  AA88177718882990 AA88177718882990  AA88177718882990\n AA88177718882990  AA88177718882990  AA88177718882990 AA88177718882990  AA88177718882990\n AA88177718882990  AA88177718882990  AA88177718882990 AA88177718882990  AA88177718882990\n AA88177718882990  AA88177718882990  AA88177718882990 AA88177718882990  AA88177718882990\n AA88177718882990  AA88177718882990  AA88177718882990 AA88177718882990  AA88177718882990\n AA88177718882990  AA88177718882990  AA88177718882990 AA88177718882990  AA88177718882990\n AA88177718882990  AA88177718882990  AA88177718882990 AA88177718882990  AA88177718882990\n AA88177718882990  AA88177718882990  AA88177718882990 AA88177718882990  AA88177718882990\n AA88177718882990  AA88177718882990  AA88177718882990 AA88177718882990  AA88177718882990\n AA88177718882990  AA88177718882990  AA88177718882990 AA88177718882990  AA88177718882990\n ', colSpan: 6, fillColor: 'white',
                border: [true, false, true, true]
              }],
              ['1',
                'STDESS0635AA',
                'RDU4160D 16CH UHF (Brus) Order 3202294242 line 4',
                '12,000.00',
                '1000',
                '-106,000.00'
              ],
              ['1',
                'STDESS0635AA',
                'RDU4160D 16CH UHF (Brus) Order 3202294242 line 4',
                '12,000.00',
                '1000',
                '-106,000.00'
              ],
              ['1',
                'STDESS0635AA',
                'RDU4160D 16CH UHF (Brus) Order 3202294242 line 4',
                '12,000.00',
                '1000',
                '-106,000.00'
              ],
              ['1',
                'STDESS0635AA',
                'RDU4160D 16CH UHF (Brus) Order 3202294242 line 4',
                '12,000.00',
                '1000',
                '-106,000.00'
              ], ['1',
                'STDESS0635AA',
                'RDU4160D 16CH UHF (Brus) Order 3202294242 line 4',
                '12,000.00',
                '1000',
                '-106,000.00'
              ],
              ['1',
                'STDESS0635AA',
                'RDU4160D 16CH UHF (Brus) Order 3202294242 line 4',
                '12,000.00',
                '1000',
                '-106,000.00'
              ],
              ['1',
                'STDESS0635AA',
                'RDU4160D 16CH UHF (Brus) Order 3202294242 line 4',
                '12,000.00',
                '1000',
                '-106,000.00'
              ]
            ],
          },
          fontSize: 10,
          layout: {
            fillColor: function (rowIndex, node, columnIndex) {
              return (rowIndex % 2 === 0) ? '#ececec' : null;
            }
          }
        },
        {
          text: '\n\nOrder Return - Shipping Information',
          fontSize: 12,
          bold: true,
          pageBreak: 'before'
        },
        {
          text: '\nReason Code',
          fontSize: 10,
          bold: true
        },
        {
          text: '\nIncorrect configuration. quis nostrud exercitation\n ullamco laboris nisi ut aliquip ex ea commodo\n consequat ex ea.',
          fontSize: 9,
        },
        {
          text: '\n\n'
        },
        {
          table: {
            widths: ['*', '*'],
            body: [
              [{
                text: 'Shipping Address',
                fontSize: 10,
                bold: true
              }, {
                text: 'Billing Address',
                fontSize: 10,
                bold: true,
                paddingLeft: 20
              }],
              [{ text: 'Test Test\n500 W Monroe Street \nChicago, IL \nUnited States' },
              { text: 'Ultimate Address Name \n123 Main Street \nChicago, IL \nUnited States' }]
            ],
          },
          layout: 'noBorders',
          fontSize: 10
        },
      ]
    };
    pdfMake.createPdf(documentDefinition).open();

  }
}