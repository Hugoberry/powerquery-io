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

Utvärderar <code>query</code> mot <code>target</code> med de parametrar som angetts i <code>parameters</code> och som använder de alternativ som har angetts i <code>options</code>.<br />Frågans utdata definieras av <code>target</code>.<br /><code>target</code> tillhandahåller kontexten för den åtgärd som beskrivs av <code>query</code>.<br /><code>query</code>beskriver den fråga som ska köras mot <code>target</code>. <code>query</code> uttrycks på ett sätt som är specifikt för <code>target</code> (t.ex. en T-SQL-instruktion).<br />Det valfria <code>parameters</code>-värdet kan innehålla antingen en lista eller en post enligt vad som passar bäst för att tillhandahålla det parametervärde som förväntas av <code>query</code>.<br />Den valfria l <code>options</code>-posten kan innehålla alternativ som påverkar utvärderingsbeteendet för <code>query</code> mot <code>target</code>. Dessa alternativ är specifika för <code>target</code>.<br />



## Category
Values
