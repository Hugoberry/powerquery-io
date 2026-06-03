---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Returnerer den aktuelle dato og det aktuelle klokkeslæt i den lokale tidszone.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Returnerer en `værdi for datetime`, der er angivet til aktuel dato og aktuelt klokkeslæt i systemet.  
  
Den værdi, der returneres af denne funktion, afhænger af, om du kører forespørgslen på en lokal computer eller online. Hvis du f.eks. kører forespørgslen på et system, der er placeret i us Pacific Time zone, returnerer Power Query Desktop den dato og det klokkeslæt, der er angivet på din lokale computer. Men hvis du kører din forespørgsel i skyen, returnerer Power Query Online UTC-tid, fordi den læser den tid, der er angivet på de virtuelle cloudmaskiner, som alle er indstillet til UTC.


## Examples

### Example #1
Aktivér denne funktion på en lokal computer, der kører Power Query skrivebord.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Aktivér denne funktion i skyen, der kører Power Query Online.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
