---
title: WebAction.Request
---

# WebAction.Request


## Description

Crea unha acción que, ao executarse, devolverá os resultados da execución dunha solicitude HTTP como un valor binario.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Details

Crea unha acción que, cando se executa, devolve o resultado de realizar unha solicitude de <code>method</code> fronte a <code>url</code> usando HTTP como valor binario.    Pódese fornecer un parámetro de rexistro opcional, <code>options</code>, para especificar propiedades adicionais. O rexistro pode conter os seguintes campos:    <ul><li><code>Query</code> : Engada par&#225;metros de consulta mediante programaci&#243;n ao URL sen ter que preocuparse dos caracteres de escape.</li><li><code>ApiKeyName</code> : Se o sitio de destino ten unha noci&#243;n dunha clave da API, este par&#225;metro p&#243;dese utilizar para especificar o nome (non o valor) do par&#225;metro clave que se debe usar no enderezo URL. O valor da clave real proporci&#243;nase na credencial.</li><li><code>Headers</code> : Ao especificar este valor como un rexistro, forneceranse cabeceiras adicionais para unha solicitude HTTP.</li><li><code>Timeout</code> : Ao especificar este valor como unha duraci&#243;n, modificarase o tempo de espera da solicitude HTTP. O valor predefinido &#233; 100&#160;segundos.</li><li><code>ExcludedFromCacheKey</code> : Ao especificar este valor como unha lista, exclu&#237;ranse estas claves de cabeceira HTTP do c&#225;lculo para o almacenamento en cach&#233; de datos.</li><li><code>IsRetry</code> : Ao especificar este valor l&#243;xico como verdadeiro, ignoraranse as respostas existentes na cach&#233; ao obter datos.</li><li><code>ManualStatusHandling</code> : Ao especificar este valor como unha lista, evitar&#225; o tratamento integrado de solicitudes HTTP cuxa resposta conte&#241;a un destes c&#243;digos de estado.</li><li><code>RelativePath</code> : Ao especificar este valor como texto, an&#233;xase ao URL base antes de realizar a solicitude.</li><li><code>Content</code> : Ao especificar este valor, provocar&#225; que o seu contido se converta no corpo da solicitude HTTP.</li></ul>    <br />    Ten en conta que esta función está deshabilitada na maioría dos contextos. Considere usar Web.Contents no seu lugar.    


## Examples

### Example #1 
Realiza una solicitude GET fronte a Bing.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
