"""empty message

Revision ID: 30dc5b8cb13b
Revises: b30bd2a796bb
Create Date: 2022-10-29 01:09:14.128274

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '30dc5b8cb13b'
down_revision = 'b30bd2a796bb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('Planet',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('planet_fav_id', sa.Integer(), nullable=True),
    sa.Column('planet_name', sa.String(length=256), nullable=True),
    sa.Column('population', sa.String(length=256), nullable=True),
    sa.Column('terrain', sa.String(length=25), nullable=True),
    sa.Column('gravity', sa.Integer(), nullable=True),
    sa.Column('orbital_period', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('User',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=256), nullable=False),
    sa.Column('name', sa.String(length=256), nullable=True),
    sa.Column('password', sa.String(length=256), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('Vehicle',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('vehicle_name', sa.String(length=256), nullable=True),
    sa.Column('crew_size', sa.String(length=25), nullable=True),
    sa.Column('model', sa.String(length=256), nullable=True),
    sa.Column('cost_in_credits', sa.Float(), nullable=True),
    sa.Column('consumables', sa.String(length=256), nullable=True),
    sa.Column('cargo_capacity', sa.Integer(), nullable=True),
    sa.Column('length', sa.Float(), nullable=True),
    sa.Column('manufacturer', sa.String(length=256), nullable=True),
    sa.Column('max_atmosphering_speed', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('Person',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('person_fav_id', sa.Integer(), nullable=True),
    sa.Column('name', sa.String(length=256), nullable=True),
    sa.Column('eye_color', sa.String(length=25), nullable=True),
    sa.Column('hair_color', sa.String(length=25), nullable=True),
    sa.Column('gender', sa.String(length=25), nullable=True),
    sa.Column('height', sa.Float(), nullable=True),
    sa.Column('mass', sa.Float(), nullable=True),
    sa.Column('Planet_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['Planet_id'], ['Planet.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('Planet_To_Favorites',
    sa.Column('planet_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['planet_id'], ['Planet.id'], ),
    sa.PrimaryKeyConstraint('planet_id')
    )
    op.create_table('Vehicle_To_Favorites',
    sa.Column('vehicle_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['User.id'], ),
    sa.ForeignKeyConstraint(['vehicle_id'], ['Vehicle.id'], ),
    sa.PrimaryKeyConstraint('vehicle_id', 'user_id')
    )
    op.create_table('Person_To_Favorites',
    sa.Column('person_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['person_id'], ['Person.id'], ),
    sa.PrimaryKeyConstraint('person_id')
    )
    op.drop_table('user')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('email', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.Column('password', sa.VARCHAR(length=80), autoincrement=False, nullable=False),
    sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='user_pkey'),
    sa.UniqueConstraint('email', name='user_email_key')
    )
    op.drop_table('Person_To_Favorites')
    op.drop_table('Vehicle_To_Favorites')
    op.drop_table('Planet_To_Favorites')
    op.drop_table('Person')
    op.drop_table('Vehicle')
    op.drop_table('User')
    op.drop_table('Planet')
    # ### end Alembic commands ###