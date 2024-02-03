---
title: Table.View
---

# Table.View


## Description

Vytvoří nebo rozšíří tabulku s uživatelsky definovanými obslužnými rutinami pro operace s dotazy a akcemi.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Details

Vrátí zobrazení <code>table</code>, kde se funkce zadané v <code>handlers</code> používají místo výchozího chování operace, když se operace použije pro toto zobrazení.<br />Pokud je zadáno <code>table</code>, všechny funkce obslužných rutin jsou volitelné. Pokud <code>table</code> zadáno není, vyžadují se funkce obslužných rutin <code>GetType</code> a <code>GetRows</code>. Když pro operaci není zadaná funkce obslužné rutiny, použije se pro <code>table</code> výchozí chování příslušné operace (s výjimkou <code>GetExpression</code>).<br />Funkce obslužné rutiny musí vrátit hodnotu, která je sémanticky ekvivalentní výsledku použití operace na <code>table</code> (nebo výslednému zobrazení v případě <code>GetExpression</code>).<br />Když funkce obslužné rutiny vyvolá chybu, použije se pro zobrazení výchozí chování operace.<br />K implementaci překládání zdroje dat se může použít <code>Table.View</code> – překlad M dotazů na dotazy specifické pro konkrétní zdroj (třeba pro vytvoření příkazů T-SQL z M dotazů).<br />Kompletnější popis funkcí <code>Table.View</code> najdete v publikované dokumentaci k vlastnímu konektoru Power Query.<br />


## Examples

### Example #1 
Vytvořit základní zobrazení, které nevyžaduje přístup k řádkům, aby bylo možné určit typ nebo počet řádků
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
