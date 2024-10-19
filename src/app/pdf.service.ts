import {Injectable} from '@angular/core';
import {jsPDF} from 'jspdf';
import autoTable, {RowInput} from 'jspdf-autotable';

import '../assets/fonts/Roboto-Regular-normal.js';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() {
  }

  generatePdf(): void {
    const doc: jsPDF = new jsPDF('landscape'); // Создаем PDF в ландшафтном режиме


    // Функция для добавления заголовка на каждой странице
    function header(doc: jsPDF, pageNumber: number, totalPages: number): void {
      // Верхний заголовок (центральная ячейка)
      // todo сделать пагинацию
      autoTable(doc, {
        body: [
          [{
            content: 'Перечень технологического оборудования ООО "НТФФ" "ПОЛИСАН"',
            colSpan: 3,
            styles: {halign: 'center', font: 'Roboto-Regular', fontStyle: 'bold'}
          },
            {content: `Стр ${pageNumber} из ${totalPages}`, colSpan: 1, styles: {halign: 'center'}},],
          [{content: 'Дата введения:\n10.08.2024', styles: {halign: 'center'}},
            {content: 'Действительно до:\n10.08.2034', styles: {halign: 'center'}},
            {content: 'ПРЧ-ОД-2800-1202', styles: {halign: 'center'}},
            {content: 'Копия №', styles: {halign: 'center'}},

          ],
        ],
        theme: 'grid',
        startY: 10,
        styles: {
          fontSize: 8,
          valign: 'middle',
          halign: 'center',
          font: 'Roboto-Regular',
        },
        tableWidth: 'wrap', // Автоматическая ширина таблицы
        columnStyles: {
          0: {cellWidth: 50}, // Дата введения
          1: {cellWidth: 50}, // Действительно до
          2: {cellWidth: 50}, // Номер документа
          3: {cellWidth: 50}, // Копия №
          4: {cellWidth: 30}, // Номер страницы
        },
        margin: {top: 10}, // Отступ сверху
      });
    }


    // Создание основной таблицы (например, таблицы данных)
    const headers: string[][] = [['№ п.п.', 'Наименование', 'Наименование по паспорту (акту ввода в эксплуатацию)', 'Наименование по проекту', 'Сокращенное наименование оборудования', 'Идентификационный №', '№ помещения']];


    const data: RowInput[] = [
      [{content: "ПРОИЗВОДСТВО СТЕРИЛЬНЫХ ПРЕПАРАТОВ", colSpan: 7, styles: {halign: 'center'}}],
      [{content: "Производство стерильных препаратов корпус П1", colSpan: 7, styles: {halign: 'center'}}],
      ['1.', 'Реактор', 'Реактор 1250 л ТО1', 'Реактор ТО1 емкостью 1250 л', 'TO1', 'ТО1 (1.25.00)', '426'],
      ['2.', 'Реактор', 'Реактор 1250 л ТО2', 'Реактор ТО2 емкостью 1250 л (буферная емкость)', 'TO2', 'TO2(1.26.00)', '426'],
      ['3.', 'Реактор', 'Сосуд 500 л', 'Реактор для приготовления инъекционных растворов 500 л', 'P1-500', '1.16.00', '427'],
      ['4.', 'Реактор', 'Сосуд 500 л', 'Сосуд-смеситель 1, хранение инъекционных растворов 500 л', 'P2-500', '1.17.00', '427'],
      ['5.', 'Реактор', 'Сосуд 500 л', 'Сосуд-смеситель 2, хранение инъекционных растворов в 500 л', 'P3-500', '1.18.00', '427'],
      ['6.', 'Реактор', 'Сосуд 1250 л', 'Реактор 1 для приготовления инфузионных растворов 1250 л', 'P1-1250', '1.40.00', '438'],
      ['7.', 'Реактор', 'Сосуд 1250 л', 'Реактор 2 для приготовления инфузионных растворов 1250 л', 'P2-1250', '1.41.00', '438'],
      ['8.', 'Реактор передвижной', 'Сосуд 100 л', 'Сосуд-смеситель передвижной, объем 100 л', '-------', '1.30.00', '426'],
      ['9.', 'Реактор передвижной*', 'Сосуд 100 л', 'Сосуд-смеситель передвижной, объем 100 л', '-------', '3.31.00', '427'],
      ['10.', 'Реактор передвижной', 'Сосуд 100 л', 'Сосуд-смеситель передвижной, объем 100 л', '-------', '1.42.00', '438'],
      ['11.', 'Реактор передвижной*', 'Сосуд 100 л', 'Сосуд-смеситель передвижной, объем 100 л', '-------', '3.32.00', '438'],
      ['12.', 'Реактор передвижной', 'Сосуд 100 л', 'Сосуд-смеситель передвижной, объем 100 л', '-------', 'Т9.1', '438'],
      // Добавьте оставшиеся строки данных аналогично...
    ];

    // Позиционируем и добавляем таблицу

    autoTable(doc, {
      head: headers,
      body: data,
      didDrawPage: (data) => {
        // Получаем текущий номер страницы и общее количество страниц
        const totalPages: number = data.pageCount;
        const pageCurrent: number = data.pageNumber;

        // Вызов функции заголовка на каждой странице с нумерацией страниц
        header(doc, pageCurrent, totalPages);

      },
      startY: 60,
      margin: {top: 10},
      theme: 'grid',
      headStyles: {fillColor: [41, 128, 185]},
      styles: {font: 'Roboto-Regular', fontSize: 10, halign: 'center',},
    });

    // Сохраняем PDF
    doc.save('equipment-list.pdf');
  }


  generateSecondPdf() {
    const doc: jsPDF = new jsPDF('landscape');


    // Добавление текста в PDF

    doc.setFontSize(10);
    doc.setFont('Roboto-Regular');
    doc.text('СОГЛАСОВАНО', 15, 10);
    doc.text('Директор по качеству', 15, 15);
    doc.text('__________/Скорик С.И./', 15, 20);
    doc.text('«____» декабря 2023 г.', 15, 25);

    // Правый текст (выравниваем по правому краю)
    const pageWidth = doc.internal.pageSize.getWidth();
    doc.text('УТВЕРЖДАЮ',pageWidth - 15, 10, { align: 'right' });
    doc.text('Главный инженер', pageWidth - 15, 15, { align: 'right' });
    doc.text('фармацевтического завода', pageWidth - 15, 20, { align: 'right' });
    doc.text('__________/Волченков Д.Г./', pageWidth - 15, 25, { align: 'right' });
    doc.text('«____» декабря 2023 г.', pageWidth - 15, 30, { align: 'right' });

    doc.setFontSize(14);
    doc.setFont('Roboto-Regular');

    doc.text('График проведения ТО технологического оборудования в 2024 году', pageWidth / 2, 40, {align: 'center'});


// Определение структуры таблицы
    autoTable(doc, {
      head: [
        [
          { content: '№ п.п.', rowSpan: 3, styles: { halign: 'center', valign: 'middle' } },
          { content: 'Наименование оборудования', rowSpan: 3, styles: { halign: 'center', valign: 'middle' } },
          { content: 'Виды технического обслуживания', colSpan: 15, styles: { halign: 'center', valign: 'middle' } }
        ],
        [
          { content: 'Ежемесячное ТО', colSpan: 12, styles: { halign: 'center', valign: 'middle' } },
          { content: 'Ежеквартальное ТО', colSpan: 4, styles: { halign: 'center', valign: 'middle' } },
          { content: 'ТО по наработке', rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
          { content: 'Полугодовое ТО', rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
          { content: 'Ежегодное ТО', rowSpan: 2, styles: { halign: 'center', valign: 'middle' } }
        ],
        [
          { content: '', colSpan: 12 },
          { content: '', colSpan: 4 }
        ],
      ],
      body: [
        [
          '1', 'Вибрационная ресиверная просеивающая установка ALLGAIER VTS 600', '✔', '✔', '', '✔', '', '✔', '', '✔', '', '✔', '✔', '', '', '✔'
        ],
        // Добавьте остальные строки данных аналогично
      ],

      startY: 60,
      theme: 'grid',
      styles: {font: 'Roboto-Regular', fontSize: 9, cellPadding: 2 },
      headStyles: { fillColor: [192, 192, 192], textColor: [0, 0, 0], fontSize: 8 }, // Цвет заголовков таблицы
      columnStyles: {
        0: { cellWidth: 10 }, // Первая колонка: № п.п.
        1: { cellWidth: 60 }, // Вторая колонка: наименование оборудования
        2: { cellWidth: 11 }, // Колонки с месяцами
        3: { cellWidth: 11 },
        4: { cellWidth: 11 },
        5: { cellWidth: 11 },
        6: { cellWidth: 12 },
        7: { cellWidth: 12 },
        8: { cellWidth: 12 },
        9: { cellWidth: 12 },
        10: { cellWidth: 12 },
        11: { cellWidth: 12 },
        12: { cellWidth: 12 },
        13: { cellWidth: 12 },
        14: { cellWidth: 12 },
        15: { cellWidth: 20 }, // ТО по наработке
        16: { cellWidth: 20 }, // Полугодовое ТО
        17: { cellWidth: 20 }  // Ежегодное ТО
      },
      didDrawCell: function (data) {
        // Проверяем, рисуется ли это заголовок месяцев и кварталов
        if (data.row.index === 2 && data.column.index >= 2 && data.column.index <= 15) {
          const text = data.column.index <= 13 ?
            ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'][data.column.index - 2] :
            ['1 квартал', '2 квартал', '3 квартал', '4 квартал'][data.column.index - 14];

          // Поворачиваем текст на 90 градусов
          doc.text(text, data.cell.x + data.cell.width / 2, data.cell.y + data.cell.height / 2 + 20, { angle: 90, align: 'center' });
        }
      }

    });

    // Сохранение PDF
    doc.save("grafik_to_oborudovania.pdf");
  }
}
