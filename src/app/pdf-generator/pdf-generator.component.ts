import { Component } from '@angular/core';
import { PdfService } from '../pdf.service';

@Component({
  selector: 'app-pdf-generator',
  templateUrl: './pdf-generator.component.html',
  styleUrls: ['./pdf-generator.component.css']
})
export class PdfGeneratorComponent {
  private data = [
    {
      "id": "12db04ed-75dd-45e7-8200-c74c3dc0dd1f",
      "internalId": 1,
      "createdAt": "2024-10-18T13:09:01.246Z",
      "title": "Квадроидный коллайдер",
      "description": "Запускает процесс квантования квадроберов",
      "equipmentCommonName": "Квадроидный коллайдер",
      "equipmentProjectName": "Квадробер-ланцет",
      "equipmentAliasName": "Снаряд-камиказде для СВО",
      "equipmentInventoryNumber": "005Ф",
      "roomNumber": "196И",
      "isActive": true,
      "areaId": "de61a072-38f5-4dec-8529-b82307ac720c",
      "area": {
        "id": "de61a072-38f5-4dec-8529-b82307ac720c",
        "internalId": 1,
        "createdAt": "2024-10-18T13:02:08.873Z",
        "title": "Участок 1",
        "description": "Участок 1",
        "isActive": true,
        "__typename": "Area"
      },
      "serviceTemplates": [
        {
          "id": "56afe278-ccba-4cee-bc57-09845882206b",
          "internalId": 1,
          "createdAt": "2024-10-18T13:10:17.094Z",
          "title": "Восстановление неразорвавшихся единиц",
          "description": "Те кто не долетел",
          "isActive": true,
          "equipmentId": "12db04ed-75dd-45e7-8200-c74c3dc0dd1f",
          "executedServices": [
            {
              "id": "113fb50e-2aa9-463a-bb94-5fa20f262e19",
              "internalId": 2,
              "title": "Восстановление неразорвавшихся единиц : 18-11-2024",
              "description": "Те кто не долетел",
              "serviceTemplateId": "56afe278-ccba-4cee-bc57-09845882206b",
              "serviceTemplate": {
                "id": "56afe278-ccba-4cee-bc57-09845882206b",
                "internalId": 1,
                "createdAt": "2024-10-18T13:10:17.094Z",
                "title": "Восстановление неразорвавшихся единиц",
                "description": "Те кто не долетел",
                "isActive": true,
                "equipmentId": "12db04ed-75dd-45e7-8200-c74c3dc0dd1f",
                "__typename": "ServiceTemplate"
              },
              "status": "PLANNED",
              "plannedAt": "2024-11-18T15:30:00.000Z",
              "startedAt": null,
              "finishedAt": null,
              "executedServiceSteps": [],
              "__typename": "ExecutedService"
            },
            {
              "id": "3bb52c0b-e630-47d6-a8e8-a2819f827be1",
              "internalId": 1,
              "title": "Восстановление неразорвавшихся единиц : 18-10-2024",
              "description": "Те кто не долетел",
              "serviceTemplateId": "56afe278-ccba-4cee-bc57-09845882206b",
              "serviceTemplate": {
                "id": "56afe278-ccba-4cee-bc57-09845882206b",
                "internalId": 1,
                "createdAt": "2024-10-18T13:10:17.094Z",
                "title": "Восстановление неразорвавшихся единиц",
                "description": "Те кто не долетел",
                "isActive": true,
                "equipmentId": "12db04ed-75dd-45e7-8200-c74c3dc0dd1f",
                "__typename": "ServiceTemplate"
              },
              "status": "PLANNED",
              "plannedAt": "2020-10-20T15:30:00.000Z",
              "startedAt": null,
              "finishedAt": null,
              "executedServiceSteps": [],
              "__typename": "ExecutedService"
            },
            {
              "id": "b9d8469c-3af7-4bf4-b957-5ad602e8bee3",
              "internalId": 3,
              "title": "Восстановление неразорвавшихся единиц : 19-10-2024",
              "description": "Те кто не долетел",
              "serviceTemplateId": "56afe278-ccba-4cee-bc57-09845882206b",
              "serviceTemplate": {
                "id": "56afe278-ccba-4cee-bc57-09845882206b",
                "internalId": 1,
                "createdAt": "2024-10-18T13:10:17.094Z",
                "title": "Восстановление неразорвавшихся единиц",
                "description": "Те кто не долетел",
                "isActive": true,
                "equipmentId": "12db04ed-75dd-45e7-8200-c74c3dc0dd1f",
                "__typename": "ServiceTemplate"
              },
              "status": "PLANNED",
              "plannedAt": "2024-10-19T20:22:00.000Z",
              "startedAt": null,
              "finishedAt": null,
              "executedServiceSteps": [],
              "__typename": "ExecutedService"
            },
            {
              "id": "b154fdf4-3d69-4d15-9d15-db7366c23b3d",
              "internalId": 4,
              "title": "Восстановление неразорвавшихся единиц : 19-11-2024",
              "description": "Те кто не долетел",
              "serviceTemplateId": "56afe278-ccba-4cee-bc57-09845882206b",
              "serviceTemplate": {
                "id": "56afe278-ccba-4cee-bc57-09845882206b",
                "internalId": 1,
                "createdAt": "2024-10-18T13:10:17.094Z",
                "title": "Восстановление неразорвавшихся единиц",
                "description": "Те кто не долетел",
                "isActive": true,
                "equipmentId": "12db04ed-75dd-45e7-8200-c74c3dc0dd1f",
                "__typename": "ServiceTemplate"
              },
              "status": "PLANNED",
              "plannedAt": "2024-11-19T20:22:00.000Z",
              "startedAt": null,
              "finishedAt": null,
              "executedServiceSteps": [],
              "__typename": "ExecutedService"
            },
            {
              "id": "882706af-ccb2-452c-ae75-15cf72ca5bfd",
              "internalId": 5,
              "title": "Восстановление неразорвавшихся единиц : 19-12-2024",
              "description": "Те кто не долетел",
              "serviceTemplateId": "56afe278-ccba-4cee-bc57-09845882206b",
              "serviceTemplate": {
                "id": "56afe278-ccba-4cee-bc57-09845882206b",
                "internalId": 1,
                "createdAt": "2024-10-18T13:10:17.094Z",
                "title": "Восстановление неразорвавшихся единиц",
                "description": "Те кто не долетел",
                "isActive": true,
                "equipmentId": "12db04ed-75dd-45e7-8200-c74c3dc0dd1f",
                "__typename": "ServiceTemplate"
              },
              "status": "PLANNED",
              "plannedAt": "2024-12-19T20:22:00.000Z",
              "startedAt": null,
              "finishedAt": null,
              "executedServiceSteps": [],
              "__typename": "ExecutedService"
            },
            {
              "id": "3825e329-b79a-454f-848d-a20106ff8b76",
              "internalId": 6,
              "title": "Восстановление неразорвавшихся единиц : 19-01-2025",
              "description": "Те кто не долетел",
              "serviceTemplateId": "56afe278-ccba-4cee-bc57-09845882206b",
              "serviceTemplate": {
                "id": "56afe278-ccba-4cee-bc57-09845882206b",
                "internalId": 1,
                "createdAt": "2024-10-18T13:10:17.094Z",
                "title": "Восстановление неразорвавшихся единиц",
                "description": "Те кто не долетел",
                "isActive": true,
                "equipmentId": "12db04ed-75dd-45e7-8200-c74c3dc0dd1f",
                "__typename": "ServiceTemplate"
              },
              "status": "PLANNED",
              "plannedAt": "2025-01-19T20:22:00.000Z",
              "startedAt": null,
              "finishedAt": null,
              "executedServiceSteps": [],
              "__typename": "ExecutedService"
            },
            {
              "id": "1d5e7f72-ef8c-4d32-b239-b65f4db7aa4e",
              "internalId": 7,
              "title": "Восстановление неразорвавшихся единиц : 19-02-2025",
              "description": "Те кто не долетел",
              "serviceTemplateId": "56afe278-ccba-4cee-bc57-09845882206b",
              "serviceTemplate": {
                "id": "56afe278-ccba-4cee-bc57-09845882206b",
                "internalId": 1,
                "createdAt": "2024-10-18T13:10:17.094Z",
                "title": "Восстановление неразорвавшихся единиц",
                "description": "Те кто не долетел",
                "isActive": true,
                "equipmentId": "12db04ed-75dd-45e7-8200-c74c3dc0dd1f",
                "__typename": "ServiceTemplate"
              },
              "status": "PLANNED",
              "plannedAt": "2025-02-19T20:22:00.000Z",
              "startedAt": null,
              "finishedAt": null,
              "executedServiceSteps": [],
              "__typename": "ExecutedService"
            },
            {
              "id": "6510bef0-9bbb-4616-bb9f-fb2eee8e2097",
              "internalId": 8,
              "title": "Восстановление неразорвавшихся единиц : 19-03-2025",
              "description": "Те кто не долетел",
              "serviceTemplateId": "56afe278-ccba-4cee-bc57-09845882206b",
              "serviceTemplate": {
                "id": "56afe278-ccba-4cee-bc57-09845882206b",
                "internalId": 1,
                "createdAt": "2024-10-18T13:10:17.094Z",
                "title": "Восстановление неразорвавшихся единиц",
                "description": "Те кто не долетел",
                "isActive": true,
                "equipmentId": "12db04ed-75dd-45e7-8200-c74c3dc0dd1f",
                "__typename": "ServiceTemplate"
              },
              "status": "PLANNED",
              "plannedAt": "2025-03-19T20:22:00.000Z",
              "startedAt": null,
              "finishedAt": null,
              "executedServiceSteps": [],
              "__typename": "ExecutedService"
            }
          ],
          "__typename": "ServiceTemplate"
        },
        {
          "id": "420ce49c-e018-47f6-82e0-4eb230dc96cf",
          "internalId": 2,
          "createdAt": "2024-10-18T17:53:09.082Z",
          "title": "Вибрационная реверсивная просеивающая установка ALLGAIER VTS 600",
          "description": "Вибрационная реверсивная просеивающая установка ALLGAIER VTS 600 - описание",
          "isActive": true,
          "equipmentId": "12db04ed-75dd-45e7-8200-c74c3dc0dd1f",
          "executedServices": [],
          "__typename": "ServiceTemplate"
        }
      ],
      "__typename": "Equipment"
    }
  ]
  constructor(private pdfService: PdfService) { }

  generatePdf() {
    this.pdfService.generatePdf(this.data);
  }
  generateSecondPdf() {
    this.pdfService.generateSecondPdf(this.data);
  }
}
