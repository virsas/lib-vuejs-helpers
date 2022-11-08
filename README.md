# @virsas/vue-helpers

Virsas Vue3 helpers' library

## Installation

### Install

``` bash
cd vue_project
npm install @virsas/vue-helpers
npm start
```

### Import and usage

``` vue
<template>
  <div>...</div>
</template>

<script setup>
import { useMeta } from "quasar";
import { VssSetMetadata } from "@virsas/vue-helpers";

useMeta(
  VssSetMetadata(
    process.env.VUE_WEB_URL + $route.fullPath,
    process.env.VUE_WEB_ASSETS + "/icon/512x512Origin.png",
    process.env.VUE_WEB_TITLE,
    t("page.home.html_title"),
    t("page.home.html_description")
  )
);
</script>
```

## Utilities List

### Metadata

- VssSetMetadata

### Date

- VssStringToDate
- VssStringToDatetime
- VssStringToTime
- VssStringToTimestamp
- VssCurrentYear

### Validation

- VssIsValidEmail
- VssIsValidTelephone
- VssIsValidLength
- VssIsValidConfirmation
- VssIsGoodPassword

### Sleep

- VssSleep

### Pagination

- VssPagedArray

### Notify

- VssNotify

## Example

``` vue
<template>
  <div>{{ VssStringToDate("2004-10-19 10:23:54+02") }}</div>
</template>

<script setup>
import { VssStringToDate } from "@virsas/vue-helpers";
</script>
```