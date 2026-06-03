---
title: Value.NativeQuery
---

# Value.NativeQuery


Utvärderar en fråga i förhållande till ett mål.


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Remarks

Utvärderar `query` mot `target` med de parametrar som angetts i `parameters` och som använder de alternativ som har angetts i `options`.

Frågans utdata definieras av `target`.

`target` tillhandahåller kontexten för den åtgärd som beskrivs av `query`.

`query`beskriver den fråga som ska köras mot `target`. `query` uttrycks på ett sätt som är specifikt för `target` (t.ex. en T-SQL-instruktion).

Det valfria `parameters`\-värdet kan innehålla antingen en lista eller en post enligt vad som passar bäst för att tillhandahålla det parametervärde som förväntas av `query`.

Den valfria l `options`\-posten kan innehålla alternativ som påverkar utvärderingsbeteendet för `query` mot `target`. Dessa alternativ är specifika för `target`.



## Category
Values
