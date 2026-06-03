---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


Restituisce una rappresentazione testuale del valore datetimezone.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Restituisce una rappresentazione testuale di `dateTimeZone`. Per specificare proprietà aggiuntive, è possibile fornire un parametro facoltativo `record` `options`. `culture` è usato solo per i flussi di lavoro legacy. Il `record` può contenere i campi seguenti:

-   `Format`: valore `text` che indica il formato da usare. Per maggiori dettagli, vedere: https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Se si omette questo campo o si specifica `Null`, verrà eseguita la formattazione della data usando l'impostazione predefinita, definita da `Culture`.
-   `Culture`: se `Formato` non è Null, `Impostazioni cultura` controlla alcuni identificatori di formato. Ad esempio, in `"en-US"` `"MMM"` è `"Jan", "Feb", "Mar", ...` , mentre in `"ru-RU"` `"MMM"` è `>"янв", "фев", "мар", ...`. Quando `Format` è `null`, `Culture` controlla il formato predefinito da usare. Quando `Culture` è `Null` od omesso, viene usato `Culture.Current`.

Per supportare flussi di lavoro legacy `options` e `culture` possono essere anche valori di testo. Questo ha lo stesso comportamento di `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Convertire `#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)` in un valore `text`. *l'output dei risultati può variare in base alle impostazioni cultura correnti.*
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2
Eseguire la conversione usando un formato personalizzato e le impostazioni cultura tedesche.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3
Convertire utilizzando il modello ISO 8601.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
