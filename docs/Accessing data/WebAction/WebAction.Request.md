---
title: WebAction.Request
---

# WebAction.Request


Creates an action that, when executed, will return the results of performing an HTTP request as a binary value.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Creates an action that, when executed, will return the results of performing a <code>method</code> request against <code>url</code> using HTTP as a binary value.    An optional record parameter, <code>options</code>, may be provided to specify additional properties. The record can contain the following fields:    <ul><li><code>Query</code> : Programmatically add query parameters to the URL without having to worry about escaping.</li><li><code>ApiKeyName</code> : If the target site has a notion of an API key, this parameter can be used to specify the name (not the value) of the key parameter that must be used in the URL. The actual key value is provided in the credential.</li><li><code>Headers</code> : Specifying this value as a record will supply additional headers to an HTTP request.</li><li><code>Timeout</code> : Specifying this value as a duration will change the timeout for an HTTP request. The default value is 100 seconds.</li><li><code>ExcludedFromCacheKey</code> : Specifying this value as a list will exclude these HTTP header keys from being part of the calculation for caching data.</li><li><code>IsRetry</code> : Specifying this logical value as true will ignore any existing response in the cache when fetching data.</li><li><code>ManualStatusHandling</code> : Specifying this value as a list will prevent any builtin handling for HTTP requests whose response has one of these status codes.</li><li><code>RelativePath</code> : Specifying this value as text appends it to the base URL before making the request.</li><li><code>Content</code> : Specifying this value will cause its contents to become the body of the HTTP request.</li></ul>    <br />    Note that this function is disabled in most contexts. Consider using Web.Contents or Web.Headers instead.    


## Examples

### Example #1 
Perform a GET request against Bing.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
