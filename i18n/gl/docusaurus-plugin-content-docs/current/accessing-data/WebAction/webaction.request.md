---
title: WebAction.Request
---

# WebAction.Request


Crea unha acción que, ao executarse, devolverá os resultados da execución dunha solicitude HTTP como un valor binario.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Crea unha acción que, ao executarse, devolverá os resultados de realizar unha solicitude `method` contra `url` usando HTTP como valor binario. Pódese proporcionar un parámetro de rexistro opcional, `options`, para especificar propiedades adicionais. O rexistro pode conter os seguintes campos:

-   `Query` : Engada parámetros de consulta mediante programación ao URL sen ter que preocuparse dos caracteres de escape.
-   `ApiKeyName` : Se o sitio de destino ten unha noción dunha clave da API, este parámetro pódese utilizar para especificar o nome (non o valor) do parámetro clave que se debe usar no enderezo URL. O valor da clave real proporciónase na credencial.
-   `Headers` : Ao especificar este valor como un rexistro, forneceranse cabeceiras adicionais para unha solicitude HTTP.
-   `Timeout` : Ao especificar este valor como unha duración, modificarase o tempo de espera da solicitude HTTP. O valor predefinido é 100 segundos.
-   `ExcludedFromCacheKey` : Ao especificar este valor como unha lista, excluíranse estas claves de cabeceira HTTP do cálculo para o almacenamento en caché de datos.
-   `IsRetry` : Ao especificar este valor lóxico como verdadeiro, ignoraranse as respostas existentes na caché ao obter datos.
-   `ManualStatusHandling` : Ao especificar este valor como unha lista, evitará o tratamento integrado de solicitudes HTTP cuxa resposta conteña un destes códigos de estado.
-   `RelativePath` : Ao especificar este valor como texto, anéxase ao URL base antes de realizar a solicitude.
-   `Content` : Ao especificar este valor, provocará que o seu contido se converta no corpo da solicitude HTTP.

Ten en conta que esta función está desactivada na maioría dos contextos. Considere usar Web.Contents ou Web.Headers no seu lugar.


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
