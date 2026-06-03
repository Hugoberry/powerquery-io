---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


Crea un datetimezone da formati datetimezone locali, universali e personalizzati.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

Crea un valore `datetimezone` da una rappresentazione testuale `text`. Per specificare proprietà aggiuntive, è possibile fornire un parametro facoltativo `record` `options`. Il `record` può contenere i campi seguenti:

-   `Format`: valore `text` che indica il formato da usare. Per maggiori informazioni, vedere: https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Se si omette questo campo o si specifica `Null` verrà eseguita l'analisi della data nel miglior modo possibile.
-   `Culture`: se `Formato` non è Null, `Impostazioni cultura` controlla alcuni identificatori di formato. Ad esempio, in `"en-US"` `"MMM"` è `"Jan", "Feb", "Mar", ...` , mentre in `"ru-RU"` `"MMM"` è `>"янв", "фев", "мар", ...`. Quando `Format` è `null`, `Culture` controlla il formato predefinito da usare. Quando `Culture` è `Null` od omesso, viene usato `Culture.Current`.

Per supportare i flussi di lavoro legacy, `options` può essere anche un valore di testo. Questo comportamento è identico a quello di `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Convertire `"2010-12-31T01:30:00-08:00"` in un valore `datetimezone`.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2
Eseguire la conversione usando un formato personalizzato e le impostazioni cultura tedesche.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3
Eseguire la conversione con ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
