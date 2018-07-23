<?php

namespace Firebrand\PhoneLink\Forms;

use SilverStripe\Admin\LeftAndMainFormRequestHandler;
use SilverStripe\Admin\ModalController;
use SilverStripe\Core\Extension;
use SilverStripe\Forms\Form;

/**
 * Decorates ModalController with insert phone link
 * @see ModalController
 */
class PhoneLinkModalExtension extends Extension
{
    private static $allowed_actions = array(
        'EditorPhoneLink',
    );

    /**
     * @return ModalController
     */
    public function getOwner()
    {
        /** @var ModalController $owner */
        $owner = $this->owner;
        return $owner;
    }


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
            [ 'RequireLinkText' => isset($showLinkText) ]
        );
    }
}
