<?php

namespace GeminiLabs\SiteReviews\Modules\Validator;

use GeminiLabs\SiteReviews\Modules\Captcha;

class FriendlyCaptchaValidator extends CaptchaValidator
{
    /**
     * @return bool
     */
    public function isEnabled()
    {
        return glsr(Captcha::class)->isEnabled('friendlycaptcha');
    }

    /**
     * @return array
     */
    protected function errorCodes()
    {
        return [
            'bad_request' => 'Something else is wrong with your request, e.g. your request body is empty.',
            'secret_invalid' => 'Your secret key is invalid.',
            'secret_missing' => 'Your secret key is missing.',
            'sitekey_invalid' => 'Your site key is invalid.',
            'sitekey_missing' => 'Your site key is missing.',
            'solution_invalid' => 'The solution you provided was invalid (perhaps the user tried to tamper with the puzzle).',
            'solution_missing' => 'You forgot to add the solution parameter.',
            'solution_timeout_or_duplicate' => 'The puzzle that the solution was for has expired or has already been used.',
        ];
    }

    /**
     * @return array
     */
    protected function errors(array $errors)
    {
        if (empty(glsr_get_option('submissions.friendlycaptcha.key'))) {
            $errors[] = 'sitekey_missing';
        }
        return parent::errors($errors);
    }

    /**
     * @return array
     */
    protected function request()
    {
        return [
            'secret' => glsr_get_option('submissions.friendlycaptcha.secret'),
            'sitekey' => glsr_get_option('submissions.friendlycaptcha.key'),
            'solution' => $this->token(),
        ];
    }

    /**
     * @return string
     */
    protected function siteverifyUrl()
    {
        return 'https://api.friendlycaptcha.com/api/v1/siteverify';
    }

    /**
     * @return string
     */
    protected function token()
    {
        return $this->request['_frcaptcha'];
    }
}
