<?php

namespace Firebrand\PhoneLink\Extensions;

use SilverStripe\Core\Extension;

class LeftAndMainExtension extends Extension
{
    public function updateClientConfig(&$config)
    {
        $config['form']['EditorPhoneLink'] = [
            'schemaUrl' => $this->getOwner()->Link('methodSchema/Modals/EditorPhoneLink'),
        ];
    }
}