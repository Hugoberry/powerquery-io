---
title: Table.View
---

# Table.View


Vytvorí alebo rozšíri tabuľku s používateľom definovanými obslužnými programami pre operácie dotazu a akcií.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

Vráti zobrazenie tabuľky `table`, kde sa funkcie zadané v `handlers` používajú namiesto predvoleného správania operácie, keď sa daná operácia použije na zobrazenie.

Ak je `table` poskytnuté, funkcie obslužných programov sú voliteľné. Ak nie je `table` poskytnuté, funkcie obslužných programov `GetType` a `GetRows` sú vyžadované. Ak pre operáciu nie je zadaná funkcia obslužného programu, na zobrazenie `table` sa použije predvolené správanie operácie (okrem prípadu `GetExpression`).

Funkcie obslužných programov musia vrátiť hodnotu, ktorá je sémanticky ekvivalentná výsledku použitia operácie na zobrazenie `table` (alebo v prípade `GetExpression` na výsledné zobrazenie).

Ak funkcia obslužného programu vyvolá chybu, na zobrazenie sa použije predvolené správanie operácie.

`Table.View` možno použiť na implementáciu zbalenia do zdroja údajov – preklad dotazov M do dotazov špecifických pre zdroj (napríklad na vytvorenie príkazov T-SQL z dotazov M).

Podrobnejší popis funkcie `Table.View` nájdete v publikovanej dokumentácii vlastného konektora Power Query.


## Examples

### Example #1
Na určenie typu alebo počtu riadkov vytvorte základné zobrazenie, ktoré nevyžaduje prístup k riadkom v poradí.
```powerquery
Table.View(
    null,
    [
        GetType = () => type table [CustomerID = number, Name = text, Phone = nullable text],
        GetRows = () => Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
        GetRowCount = () => 1
    ]
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Table construction
