---
title: DateTime.FromText
---

# DateTime.FromText


Crea un valore datetimezone dai formati datetime locale e universale.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

Crea un valore `datetime` da una rappresentazione testuale `text`. Per specificare proprietà aggiuntive, è possibile fornire un parametro facoltativo `record` `options`. Il `record` può contenere i campi seguenti:

-   `Format`: valore `text` che indica il formato da usare. Per maggiori informazioni, vedere: https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Se si omette questo campo o si specifica `Null` verrà eseguita l'analisi della data nel miglior modo possibile.
-   `Culture`: se `Formato` non è Null, `Impostazioni cultura` controlla alcuni identificatori di formato. Ad esempio, in `"en-US"` `"MMM"` è `"Jan", "Feb", "Mar", ...` , mentre in `"ru-RU"` `"MMM"` è `>"янв", "фев", "мар", ...`. Quando `Format` è `null`, `Culture` controlla il formato predefinito da usare. Quando `Culture` è `Null` od omesso, viene usato `Culture.Current`.

Per supportare i flussi di lavoro legacy, `options` può essere anche un valore di testo. Questo comportamento è identico a quello di `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Convertire `"2010-12-31T01:30:00"` in un valore datetime.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
Convertire `"2010-12-31T01:30:00.121212"` in un valore datetime.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
Convertire `"2010-12-31T01:30:00"` in un valore datetime.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
Convertire `"20101231T013000"` in un valore datetime.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
