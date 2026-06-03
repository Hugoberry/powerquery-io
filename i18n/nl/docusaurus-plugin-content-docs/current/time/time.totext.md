---
title: Time.ToText
---

# Time.ToText


Retourneert een tekstweergave van de tijdwaarde.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Retourneert een tekstweergave van `time`. Er kan een optionele parameter `record` `options` worden opgegeven om aanvullende eigenschappen op te geven. `culture` wordt alleen gebruikt voor verouderde werkstromen. De `record` kan de volgende velden bevatten:

-   `Format`: een `text`waarde die de indeling aangeeft die moet worden gebruikt. Ga naar https://go.microsoft.com/fwlink/?linkid=2180104 en https://go.microsoft.com/fwlink/?linkid=2180105 voor meer informatie. Als u dit veld weglaat of `null` opgeeft, wordt de datum opgemaakt aan de hand van de standaardwaarde die is gedefinieerd door `Culture`.
-   `Culture`: als `Format` niet nul is, worden bepaalde indelingsaanduidingen bepaald door `Culture`. Voor `'en-US'` staat `"tt"` bijvoorbeeld voor `'AM' of 'PM'`, terwijl voor `'ar-EG'` `"tt"` staat voor `'ص' of 'م'`. Wanneer `Format` is `null`, wordt met `Culture` de standaardindeling bepaald die moet worden gebruikt. Als `Culture` de waarde `null` heeft of niet wordt gebruikt, wordt `Culture.Current` gebruikt.

Als u oudere werkstromen wilt ondersteunen, kunnen `options` en `culture` ook tekstwaarden zijn. Dit heeft hetzelfde gedrag als bij `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
`#time(01, 30, 25)` converteren naar een `text`\-waarde. *De uitvoer van resultaten kan variëren, afhankelijk van de huidige culture.*
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2
Converteren met een aangepaste indeling en de Duitse cultuur.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3
Converteren met standaardtijdnotatie.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
