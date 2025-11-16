<?php

namespace Firebrand\PhoneLink\Forms;

use SilverStripe\Admin\ModalController;
use SilverStripe\Core\Extension;
use SilverStripe\Forms\Form;

/**
 * Decorates ModalController with insert phone link
 * @see ModalController
 */
class PhoneLinkModalExtension extends Extension
{
    private static array $allowed_actions = [
        'EditorPhoneLink',
    ];

    /**
     * Form for inserting internal link pages
     *
     * @return Form
     */
    public function EditorPhoneLink()
    {
        $showLinkText = $this->getOwner()->getRequest()->getVar('requireLinkText');
        $factory = EditorPhoneLinkFormFactory::singleton();
        return $factory->getForm(
            $this->getOwner(),
            "EditorPhoneLink",
            ['RequireLinkText' => isset($showLinkText)]
        );
    }
}
