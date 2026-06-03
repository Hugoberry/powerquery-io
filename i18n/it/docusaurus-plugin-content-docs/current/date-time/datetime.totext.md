---
title: DateTime.ToText
---

# DateTime.ToText


Restituisce una rappresentazione testuale del valore datetime.


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Restituisce una rappresentazione testuale di `dateTime`. Per specificare proprietà aggiuntive, è possibile fornire un parametro facoltativo `record` `options`. `culture` è usato solo per i flussi di lavoro legacy. Il `record` può contenere i campi seguenti:

-   `Format`: valore `text` che indica il formato da usare. Per maggiori dettagli, vedere: https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Se si omette questo campo o si specifica `Null`, verrà eseguita la formattazione della data usando l'impostazione predefinita, definita da `Culture`.
-   `Culture`: se `Formato` non è Null, `Impostazioni cultura` controlla alcuni identificatori di formato. Ad esempio, in `"en-US"` `"MMM"` è `"Jan", "Feb", "Mar", ...` , mentre in `"ru-RU"` `"MMM"` è `>"янв", "фев", "мар", ...`. Quando `Format` è `null`, `Culture` controlla il formato predefinito da usare. Quando `Culture` è `Null` od omesso, viene usato `Culture.Current`.

Per supportare flussi di lavoro legacy `options` e `culture` possono essere anche valori di testo. Questo ha lo stesso comportamento di `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Convertire `#datetime(2010, 12, 31, 01, 30, 25)` in un valore `text`. *L'output dei risultati può variare a seconda delle impostazioni cultura correnti.*
```powerquery
DateTime.ToText(#datetime(2010, 12, 31, 01, 30, 25))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM"
```


### Example #2
Eseguire la conversione usando un formato personalizzato e le impostazioni cultura tedesche.
```powerquery
DateTime.ToText(#datetime(2010, 12, 30, 2, 4, 50.36973), [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730"
```


### Example #3
Convertire utilizzando il modello ISO 8601.
```powerquery
DateTime.ToText(#datetime(2000, 2, 8, 3, 45, 12),[Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12Z"
```




## Category
DateTime
