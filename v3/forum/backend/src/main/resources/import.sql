-- You can use this file to load seed data into the database using SQL statements
INSERT INTO PERFIL VALUES('0', 'ADMINISTRATOR');
INSERT INTO PERFIL VALUES('1', 'MODERADOR');
INSERT INTO PERFIL VALUES('2', 'GUEST');

INSERT INTO FUNCIONALIDADE VALUES('0', 'usuario');
INSERT INTO FUNCIONALIDADE VALUES('1', 'perfil');
INSERT INTO FUNCIONALIDADE VALUES('2', 'permisso');
INSERT INTO FUNCIONALIDADE VALUES('3', 'perfil');
INSERT INTO FUNCIONALIDADE VALUES('4', 'categoria');
INSERT INTO FUNCIONALIDADE VALUES('5', 'topico');
INSERT INTO FUNCIONALIDADE VALUES('6', 'mensagem');

INSERT INTO PERMISSAO (ID, PERFIL_ID, FUNCIONALIDADE_ID, FIND, MERGEFULL, MERGEHALF, PERSIST, REMOVE) VALUES('0', '0', '0', true, true, true, true, true);
INSERT INTO PERMISSAO (ID, PERFIL_ID, FUNCIONALIDADE_ID, FIND, MERGEFULL, MERGEHALF, PERSIST, REMOVE) VALUES('1', '0', '1', true, true, true, true, true);
INSERT INTO PERMISSAO (ID, PERFIL_ID, FUNCIONALIDADE_ID, FIND, MERGEFULL, MERGEHALF, PERSIST, REMOVE) VALUES('2', '0', '2', true, true, true, true, true);
INSERT INTO PERMISSAO (ID, PERFIL_ID, FUNCIONALIDADE_ID, FIND, MERGEFULL, MERGEHALF, PERSIST, REMOVE) VALUES('3', '0', '3', true, true, true, true, true);
INSERT INTO PERMISSAO (ID, PERFIL_ID, FUNCIONALIDADE_ID, FIND, MERGEFULL, MERGEHALF, PERSIST, REMOVE) VALUES('4', '0', '4', true, true, true, true, true);
INSERT INTO PERMISSAO (ID, PERFIL_ID, FUNCIONALIDADE_ID, FIND, MERGEFULL, MERGEHALF, PERSIST, REMOVE) VALUES('5', '0', '5', true, true, true, true, true);
INSERT INTO PERMISSAO (ID, PERFIL_ID, FUNCIONALIDADE_ID, FIND, MERGEFULL, MERGEHALF, PERSIST, REMOVE) VALUES('6', '0', '6', true, true, true, true, true);

INSERT INTO USUARIO (ID, EMAIL, FIRSTNAME, PASS, PERFIL_ID) VALUES('b83810af-7ba9-4aea-8bb6-f4992a72c5fb', 'admin@demoiselle.org', 'admin', 'e10adc3949ba59abbe56e057f20f883e', '0');
INSERT INTO USUARIO (ID, EMAIL, FIRSTNAME, PASS, PERFIL_ID) VALUES('9e6de8f8-28de-4eae-a66e-170d575f6f79', 'moderator@demoiselle.org', 'moderator', 'e10adc3949ba59abbe56e057f20f883e', '1');
INSERT INTO USUARIO (ID, EMAIL, FIRSTNAME, PASS, PERFIL_ID) VALUES('8a3a4f2d-29b6-496e-b538-1226736420dd', 'guest@demoiselle.org', 'guest', 'e10adc3949ba59abbe56e057f20f883e', '2');

INSERT INTO CATEGORIA (ID, DESCRIPTION) VALUES ('bc9b86f7-63ee-4175-8443-dcb6589235d4', 'Sugest�es');
INSERT INTO CATEGORIA (ID, DESCRIPTION) VALUES ('095fbf22-364c-4d84-b332-87efca17da86', 'D�vidas');

INSERT INTO TOPICO (ID, CATEGORIA_ID, DESCRIPTION) VALUES('095fbf22-364c-4d84-b332-87efca17da86', 'bc9b86f7-63ee-4175-8443-dcb6589235d4', 'Solicita��o de mudan�a de endere�o');
INSERT INTO TOPICO (ID, CATEGORIA_ID, DESCRIPTION) VALUES('cd46a824-ade4-4cee-a2af-7e881bf4801d', 'bc9b86f7-63ee-4175-8443-dcb6589235d4', 'Lei seca');

INSERT INTO TOPICO (ID, CATEGORIA_ID, DESCRIPTION) VALUES('ee851622-2ac1-4931-ab73-a668d570db6a', '095fbf22-364c-4d84-b332-87efca17da86', 'Como fa�o para emplacar meu carro');
INSERT INTO TOPICO (ID, CATEGORIA_ID, DESCRIPTION) VALUES('117fe76f-05e7-44a0-a7fd-52e89a53375e', '095fbf22-364c-4d84-b332-87efca17da86', 'Processo de emplacamento');

INSERT INTO MENSAGEM VALUES('1612e1e7-a388-4f76-bd67-9954f3062ed1', '2017-03-07T11:57:40+00:00' , 'AI SIM',  '117fe76f-05e7-44a0-a7fd-52e89a53375e', 'b83810af-7ba9-4aea-8bb6-f4992a72c5fb');
INSERT INTO MENSAGEM VALUES('e3267237-fb59-4f62-a045-0cd5af692e3c', '2017-03-07T11:57:40+00:00' , 'Quero andar sem placa',  '117fe76f-05e7-44a0-a7fd-52e89a53375e', 'b83810af-7ba9-4aea-8bb6-f4992a72c5fb');