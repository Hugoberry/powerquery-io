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

Restituisce una rappresentazione testuale di <code>dateTimeZone</code>. Per specificare proprietà aggiuntive, è possibile specificare un parametro facoltativo <code>record</code> <code>options</code>,<code>culture</code> che viene usato solo per i flussi di lavoro legacy. Il <code>record</code> può contenere i campi seguenti:<ul>   <li><code>Formato</code>: un valore <code>text</code> che indica il formato da usare. Per maggiori dettagli, vedere: https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Se si omette questo campo o si specifica <code>null</code> verrà eseguita la formattazione della data usando l'impostazione predefinita, definita da <code>Impostazioni cultura</code>.</li>   <li><code>Impostazioni cultura</code>: se <code>Formato</code> non è Null, <code>Impostazioni cultura</code> controlla alcuni identificatori di formato. Ad esempio, in <code>"en-US"</code> <code>"MMM"</code> è <code>"Jan", "Feb", "Mar", ... </code>, mentre in <code>"ru-RU"</code> <code>"MMM"</code> è <code>"янв", "фев", "мар", ...</code>. Quando <code>Formato</code> è <code>null</code>, <code>Impostazioni cultura</code> controlla il formato predefinito da usare. Quando <code>Culture</code> è <code>null</code> od omesso, viene usato <code>Culture.Current</code>.</li></ul>Per supportare flussi di lavoro legacy, <code>options</code> e <code>culture</code> possono essere anche valori di testo. Questo comportamento è identico a quello se <code>options</code><code>= [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Convertire &lt;code&gt;#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)&lt;/code&gt; in un valore &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;l&#39;output dei risultati può variare in base alle impostazioni cultura correnti.&lt;/i&gt;
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
