terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
}

provider "aws" {
  region  = "af-south-1"
  profile = "default"
}

resource "aws_security_group" "ec2_sg" {
  name        = "ec2_security_group"
  description = "my default security group"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_key_pair" "ssh_key" {
  key_name   = "terraform_key"
  public_key = file("my_key.pub")
}

resource "aws_instance" "insightflair" {
  ami             = "ami-0e6b72e746c973dd6"
  instance_type   = "t3.micro"
  key_name        = aws_key_pair.ssh_key.key_name
  security_groups = [aws_security_group.ec2_sg.name]
}

output "public_ip" {
  value = aws_instance.insightflair.public_ip
}

