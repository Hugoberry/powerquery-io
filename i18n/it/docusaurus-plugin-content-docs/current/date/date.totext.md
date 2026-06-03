---
title: Date.ToText
---

# Date.ToText


Restituisce una rappresentazione testuale del valore di data.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Restituisce una rappresentazione testuale di `date`. Per specificare proprietà aggiuntive, è possibile fornire un parametro facoltativo `record` `options`. `culture` è usato solo per i flussi di lavoro legacy. Il `record` può contenere i campi seguenti:

-   `Format`: valore `text` che indica il formato da usare. Per maggiori dettagli, vedere: https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Se si omette questo campo o si specifica `Null`, verrà eseguita la formattazione della data usando l'impostazione predefinita, definita da `Culture`.
-   `Culture`: se `Formato` non è Null, `Impostazioni cultura` controlla alcuni identificatori di formato. Ad esempio, in `"en-US"` `"MMM"` è `"Jan", "Feb", "Mar", ...` , mentre in `"ru-RU"` `"MMM"` è `>"янв", "фев", "мар", ...`. Quando `Format` è `null`, `Culture` controlla il formato predefinito da usare. Quando `Culture` è `Null` od omesso, viene usato `Culture.Current`.

Per supportare flussi di lavoro legacy `options` e `culture` possono essere anche valori di testo. Questo ha lo stesso comportamento di `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Convertire `#date(2010, 12, 31)` in un valore `text`. *L'output dei risultati può variare a seconda delle impostazioni cultura correnti.*
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2
Eseguire la conversione usando un formato personalizzato e le impostazioni cultura tedesche.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3
Trovare l'anno nel calendario Hijri che corrisponde al 1° gennaio 2000 nel calendario gregoriano.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
