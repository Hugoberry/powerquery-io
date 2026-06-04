---
title: Table.ViewFunction
---

# Table.ViewFunction


Vytvoří funkci, do které může zasahovat obslužná rutina definovaná na zobrazení (prostřednictvím Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Remarks

Vytvoří funkci zobrazení založenou na `function`, se kterou lze pracovat v zobrazení vytvořeném pomocí funkce `Table.View`.

K definování obslužné rutiny pro tuto funkci zobrazení jde použít obslužnou rutinu `OnInvoke` funkce `Table.View`.

Stejně jako u obslužných rutin pro vestavěné operace platí, že pokud není zadána žádná obslužná rutina `OnInvoke` nebo pokud tato rutina neobsluhuje danou funkci zobrazení nebo pokud tato obslužná rutina vrátí chybu, přes zobrazení se aplikuje `function`.

Kompletnější popis funkcí `Table.View` a vlastních funkcí zobrazení najdete v publikované dokumentaci k vlastnímu konektoru Power Query.



## Category
Table.Table construction
