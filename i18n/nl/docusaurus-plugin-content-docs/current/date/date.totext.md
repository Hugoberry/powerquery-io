---
title: Date.ToText
---

# Date.ToText


Hiermee wordt een tekstweergave van de datumwaarde geretourneerd.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Retourneert een tekstweergave van `date`. Er kan een optionele parameter `record` `options` worden opgegeven om aanvullende eigenschappen op te geven. `culture` wordt alleen gebruikt voor verouderde werkstromen. De `record` kan de volgende velden bevatten:

-   `Format`: een `text`waarde die de indeling aangeeft die moet worden gebruikt. Ga naar https://go.microsoft.com/fwlink/?linkid=2180104 en https://go.microsoft.com/fwlink/?linkid=2180105 voor meer informatie. Als u dit veld weglaat of `null` opgeeft, wordt de datum opgemaakt aan de hand van de standaardwaarde die is gedefinieerd door `Culture`.
-   `Culture`: als `Format` niet nul is, worden bepaalde indelingsaanduidingen bepaald door `Culture`. Bijvoorbeeld: in `"en-US"` `"MMM"` is `"Jan", "Feb", "Mar", ...`, terwijl in `"ru-RU"` `"MMM"` is `"янв", "фев", "мар", ...`. Wanneer `Format` is `null`, wordt met `Culture` de standaardindeling bepaald die moet worden gebruikt. Als `Culture` de waarde `null` heeft of niet wordt gebruikt, wordt `Culture.Current` gebruikt.

Als u oudere werkstromen wilt ondersteunen, kunnen `options` en `culture` ook tekstwaarden zijn. Dit heeft hetzelfde gedrag als bij `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
`#date(2010, 12, 31)` converteren naar een `text`\-waarde. *De uitvoer van resultaten kan variëren, afhankelijk van de huidige culture.*
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2
Converteren met een aangepaste indeling en de Duitse cultuur.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3
Zoek het jaar in de Hijri-kalender die overeenkomt met 1 januari 2000 in de Gregoriaanse kalender.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
