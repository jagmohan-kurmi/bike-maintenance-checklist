window.APP_CONFIG = {
  "slug": "bike-maintenance-checklist",
  "title": "Bike Maintenance Checklist",
  "brand": "bike maintenance checklist.",
  "category": "Travel & transport",
  "tagline": "Track bicycle components, service dates, and next checks.",
  "description": "Track bicycle components, service dates, and next checks.",
  "mode": "records",
  "kind": "default",
  "fields": [
    {
      "name": "component",
      "label": "Component",
      "required": true,
      "type": "text"
    },
    {
      "name": "lastServiced",
      "label": "Last checked",
      "required": true,
      "type": "date"
    },
    {
      "name": "odometerKm",
      "label": "Current distance (km)",
      "required": true,
      "type": "number"
    },
    {
      "name": "nextDueKm",
      "label": "Check again at (km)",
      "required": true,
      "type": "number"
    },
    {
      "name": "nextDueDate",
      "label": "Check again by",
      "required": true,
      "type": "date"
    },
    {
      "name": "notes",
      "label": "Notes",
      "required": false,
      "type": "textarea"
    }
  ],
  "dateField": "nextDueDate",
  "timerField": "",
  "titleField": "component",
  "scope": "Use manufacturer guidance for maintenance intervals and safety checks.",
  "emptyText": "No entries yet. Add one above to get started."
};
