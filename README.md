# SilverStripe 4 Phone Link Module 

Silverstripe 4 module adding the possibility to create / edit Phone number links using the TinyMCE editor (tel: links).

It uses the native SilverStripe 4 React modals and seamlessly integrates in the CMS.

## Requirements

* [SilverStripe ^4.1.2](https://www.silverstripe.org/download)

## Installation

**Run the following command:**

```sh
composer require firebrandhq/silverstripe-phonelink "^1.0"
```

## Screenshots

![Add link using dropdown](docs/images/add_link_screen_1.png "Add link using dropdown")

![Configure link](docs/images/add_link_screen_2.png "Configure link")

![Link added to editor](docs/images/add_link_screen_3.png "Link added to editor")

## Translations

English and French are provided with the module.

## Contributing

[See CONTRIBUTING.md](CONTRIBUTING.md)

## Versioning

This library follows [Semver](http://semver.org). According to Semver, you will be able to upgrade to any minor or patch version of this library without any breaking changes to the public API. Semver also requires that we clearly define the public API for this library.

All methods, with `public` visibility, are part of the public API. All other methods are not part of the public API. Where possible, we'll try to keep `protected` methods backwards-compatible in minor/patch versions, but if you're overriding methods then please test your work before upgrading.

## Reporting Issues

Please [create an issue](https://github.com/firebrandhq/silverstripe-hail/issues) for any bugs you've found, or features you're missing.  