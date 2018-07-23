<?php

namespace Firebrand\PhoneLink\Forms;

use SilverStripe\Admin\Forms\LinkFormFactory;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\RequiredFields;
use SilverStripe\Forms\TextField;

class EditorPhoneLinkFormFactory extends LinkFormFactory
{
    protected function getFormFields($controller, $name, $context)
    {
        $fields = FieldList::create([
            TextField::create(
                'Link',
                _t(__CLASS__ . '.PHONE', 'Phone number')
            ),
            TextField::create(
                'Description',
                _t(__CLASS__ . '.LINKDESCR', 'Link description')
            ),
        ]);

        if ($context['RequireLinkText']) {
            $fields->insertAfter('Link', TextField::create('Text', _t(__CLASS__ . '.LINKTEXT', 'Link text')));
        }

        return $fields;
    }

    protected function getValidator($controller, $name, $context)
    {
        if ($context['RequireLinkText']) {
            return RequiredFields::create('Text');
        }

        return null;
    }
}
