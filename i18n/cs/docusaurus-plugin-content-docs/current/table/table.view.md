---
title: Table.View
---

# Table.View


Vytvoří nebo rozšíří tabulku s uživatelsky definovanými obslužnými rutinami pro operace s dotazy a akcemi.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

Vrátí zobrazení `table`, kde se funkce zadané v `handlers` používají místo výchozího chování operace, když se operace použije pro toto zobrazení.

Pokud je zadáno `table`, všechny funkce obslužných rutin jsou volitelné. Pokud `table` zadáno není, vyžadují se funkce obslužných rutin `GetType` a `GetRows`. Když pro operaci není zadaná funkce obslužné rutiny, použije se pro `table` výchozí chování příslušné operace (s výjimkou `GetExpression`).

Funkce obslužné rutiny musí vrátit hodnotu, která je sémanticky ekvivalentní výsledku použití operace na `table` (nebo výslednému zobrazení v případě `GetExpression`).

Když funkce obslužné rutiny vyvolá chybu, použije se pro zobrazení výchozí chování operace.

K implementaci překládání zdroje dat se může použít `Table.View` – překlad M dotazů na dotazy specifické pro konkrétní zdroj (třeba pro vytvoření příkazů T-SQL z M dotazů).

Kompletnější popis funkcí `Table.View` najdete v publikované dokumentaci k vlastnímu konektoru Power Query.


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
