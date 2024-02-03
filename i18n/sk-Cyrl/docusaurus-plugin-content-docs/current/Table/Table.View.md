---
title: Table.View
---

# Table.View


## Description

Vytvorí alebo rozšíri tabuľku s používateľom definovanými obslužnými programami pre operácie dotazu a akcií.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Details

Vráti zobrazenie tabuľky <code>table</code>, kde sa funkcie zadané v <code>handlers</code> používajú namiesto predvoleného správania operácie, keď sa daná operácia použije na zobrazenie.<br />Ak je <code>table</code> poskytnuté, funkcie obslužných programov sú voliteľné. Ak nie je <code>table</code> poskytnuté, funkcie obslužných programov <code>GetType</code> a <code>GetRows</code> sú vyžadované. Ak pre operáciu nie je zadaná funkcia obslužného programu, na zobrazenie <code>table</code> sa použije predvolené správanie operácie (okrem prípadu <code>GetExpression</code>).<br />Funkcie obslužných programov musia vrátiť hodnotu, ktorá je sémanticky ekvivalentná výsledku použitia operácie na zobrazenie <code>table</code> (alebo v prípade <code>GetExpression</code> na výsledné zobrazenie).<br />Ak funkcia obslužného programu vyvolá chybu, na zobrazenie sa použije predvolené správanie operácie.<br /><code>Table.View</code> možno použiť na implementáciu zbalenia do zdroja údajov – preklad dotazov M do dotazov špecifických pre zdroj (napríklad na vytvorenie príkazov T-SQL z dotazov M).<br />Podrobnejší popis funkcie <code>Table.View</code> nájdete v publikovanej dokumentácii vlastného konektora Power Query.<br />


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
