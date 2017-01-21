<?php

class PhoneLinkHtmlEditorFieldToolbar extends Extension
{

    public function updateLinkForm(Form $form)
    {

        $linkTypeField = null;
        $fieldList = null;
        $fields = $form->Fields();

        foreach ($fields as $field) {
            $linkTypeField = ($field->fieldByName('LinkType'));
            $fieldList = $field;
            if ($linkTypeField) {
                break;   //break once we have the object
            }
        }

        $source = $linkTypeField->getSource();
        $source['tel'] = 'Telephone number';
        $source['tel'] = _t(
            'HtmlEditorFieldPhoneLink.LINKTYPELABEL',
            'Telephone number'
        );
        $linkTypeField->setSource($source);

        $phoneField = TextField::create('phone', _t('HtmlEditorFieldPhoneLink.FIELDLABEL', 'Telephone number'));
        $phoneField->setForm($form);
        $fieldList->insertBefore($phoneField, 'Description');

        Requirements::javascript(PHONELINK_DIR . '/javascript/PhoneLinkHtmlEditorFieldToolbar.js');
    }
}
