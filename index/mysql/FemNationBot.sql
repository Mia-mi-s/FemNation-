USE FemnationBot;

INSERT INTO QnA (Questions,Answer)
	VALUES
    ('What is feminism?','Feminism is the radical believe that women are people'),
    ('What is gender equality?','Gender equality means equal rights, responsibilities, and opportunities regardless of gender.'),
    ('Why is feminism important?','Feminism advocates for equal rights and opportunities, challenging discrimination'),
    ('How can men support feminism?', 'Men can support feminism by listening, challenging sexism, and promoting equality in their communities and workplaces.'),
    ('What is gender bias?', 'Gender bias is prejudice or discrimination based on a persons gender, often unconscious but harmful in many settings.'),
    ('Can feminism be misunderstood?', 'Yes, sometimes feminism is misrepresented; its about equality, not about one gender being superior to another.'),
    ('Give me women that contributed to feminism', 'Some notable women who contributed to feminism include Gloria Steinem, Susan B. Anthony, Malala Yousafzai, Simone de Beauvoir, Sojourner Truth, Betty Friedan, Chimamanda Ngozi Adichie, Elizabeth Cady Stanton, Angela Davis, and Margaret Sanger.'),
    ('Who is Chimamanda Ngozi Adichie?', 'Chimamanda Ngozi Adichie is a Nigerian writer and feminist known for her book "We Should All Be Feminists" and her influential TED Talk.');
    SELECT * FROM QnA;
USE Messages;