---
title: SharePoint.Tables
---

# SharePoint.Tables


Retorna una taula que inclou contingut d'una llista del SharePoint.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Remarks

Retorna una taula que conté una fila per a cada element de llista que hi ha a la llista del SharePoint especificada, `url`. Cada fila conté propietats de la llista. Es pot especificar `options` per controlar les opcions següents:

-   `ApiVersion` : Número (14 o 15) o text "Auto" que especifica la versió de l'API del SharePoint que s'utilitzarà en aquest lloc. Si no s’especifica o no es pot detectar, s'utilitzarà la versió 14 de l'API. Si s'especifica "Auto", la versió del servidor es detectarà automàticament. Els llocs del SharePoint que no estiguin en anglès necessiten, com a mínim, la versió 15.
-   `Implementation` : Opcional. Especifica quina versió del connector del SharePoint s'utilitzarà. Els valors acceptats són "2.0" o nul. Si el valor és "2.0", s'utilitzarà la implementació 2.0 del connector del SharePoint. Si el valor és nul, s'utilitzarà la implementació original del connector del SharePoint.
-   `ViewMode` : Opcional. Aquesta opció només és vàlida per a la implementació 2.0. Els valors acceptats són "Totes" i "Per defecte". Si no s'especifica cap valor, el valor es defineix com a "Totes". Quan s'especifica "Totes", la visualització inclou totes les columnes creades per usuaris i definides pel sistema. Quan s'especifica "Per defecte", la visualització coincidirà amb el que veu l'usuari en mirar la llista en línia, amb la visualització que l'usuari hagi definit com a predeterminada a la seva configuració. Si l'usuari edita la visualització per defecte per afegir o suprimir columnes creades per usuaris o definides pel sistema, o creant una visualització nova i configurant-la com a visualització per defecte, aquests canvis es propagaran pel connector.
-   `DisableAppendNoteColumns` : Impedeix que el connector utilitzi un extrem independent per a les columnes de notes.



## Category
Accessing data
