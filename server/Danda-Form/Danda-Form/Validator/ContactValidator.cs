using System.Text.RegularExpressions;

namespace Danda_Form.Validator
{
    public static class ContactValidator
    {
        private static readonly Regex HtmlTagPattern = new(@"<[^>]+>", RegexOptions.Compiled);
        public static bool ValidateName(string name, out string error)
        {
            error = "";
            if (string.IsNullOrWhiteSpace(name))
            {
                error = "Имя не может быть пустым.";
                return false;
            }

            if (name.Length < 2)
            {
                error = "Имя слишком короткое.";
                return false;
            }
            if (HtmlTagPattern.IsMatch(name))
            {
                error = "Имя содержит недопустимые символы.";
                return false;
            }
            if (name.Length > 100)
            {
                error = $"Имя не должно превышать {100} символов.";
                return false;
            }

            return true;
        }

        public static bool ValidateContactValue(string contactValue, out string error)
        {
            error = "";
            if (string.IsNullOrWhiteSpace(contactValue))
            {
                error = "Контактная информация не может быть пустой.";
                return false;
            }

            if (contactValue.Length < 2)
            {
                error = "Контактная информация слишком короткая.";
                return false;
            }
            if (HtmlTagPattern.IsMatch(contactValue))
            {
                error = "Контактная информация содержит недопустимые символы.";
                return false;
            }
            if (contactValue.Length > 100)
            {
                error = $"Контактная информация не должна превышать {100} символов.";
                return false;
            }

            return true;
        }

    }
}
