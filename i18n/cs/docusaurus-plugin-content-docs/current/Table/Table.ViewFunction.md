---
title: Table.ViewFunction
---

# Table.ViewFunction


## Description

Vytvoří funkci, do které může zasahovat obslužná rutina definovaná na zobrazení (prostřednictvím Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Details

Vytvoří funkci zobrazení založenou na <code>function</code>, se kterou lze pracovat v zobrazení vytvořeném pomocí funkce <code>Table.View</code>.<br />K definování obslužné rutiny pro tuto funkci zobrazení jde použít obslužnou rutinu <code>OnInvoke</code> funkce <code>Table.View</code>.<br />Stejně jako u obslužných rutin pro vestavěné operace platí, že pokud není zadána žádná obslužná rutina <code>OnInvoke</code> nebo pokud tato rutina neobsluhuje danou funkci zobrazení nebo pokud tato obslužná rutina vrátí chybu, přes zobrazení se aplikuje <code>function</code>.<br />Kompletnější popis funkcí <code>Table.View</code> a vlastních funkcí zobrazení najdete v publikované dokumentaci k vlastnímu konektoru Power Query.<br />



## Category
Table.Table construction
